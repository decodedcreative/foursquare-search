export default () => class resultsList {
	
	constructor(){

	}

	createResultsList (resultsArray, targetElement) {

		const listHTML = resultsArray.map((result) => {

			return `
				<li class='result'>
					<div class="inner">
						<hgroup>
							<h2>${result.name}</h2>
							<h3>${result.address}</h3>
						</hgroup>
					</div>
				</li>`;

		}).join('');

		const resultsListElement = document.createElement('ul');
		const targetElementList = targetElement.appendChild(resultsListElement);

		targetElementList.innerHTML = listHTML;

	}

}