export default () => class resultsList {
	
	constructor(){

	}

	createResultsList (resultsArray, targetElement) {

		const listHTML = resultsArray.map((result, index) => {
			
			let transitionDelay = 0.3 * index;

			return `
				<li class='result' style='transition-delay:${transitionDelay}s;'>
					<div class="inner">
						<hgroup>
							<h2>${result.name}</h2>
							<h3>${result.address}</h3>
						</hgroup>
						<div class="rating-${result.rating}">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</li>`;
		}).join('');


		// If .search-results DIV has content in it (from previous search), empty it

		if (targetElement.children.length !== 0){
			targetElement.innerHTML = '';
		}


		const resultsListElement = document.createElement('ul');
		const targetElementList = targetElement.appendChild(resultsListElement);

		targetElementList.innerHTML = listHTML;

		setTimeout(function(){
			document.body.classList.add("loaded-results");
		}, 500)

	}

}