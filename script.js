const url1 = "/data.json";

async function fetchData(url) {
    try {
        const responce = await fetch(url);
        const data = await responce.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchData(url1);

    const containerEl = document.querySelector('.cards__wrapper')


    data.forEach(el => {

        containerEl.insertAdjacentHTML("beforeend", `
             <div class="cards__item">
				<div class="item-img" style="background-image: url(${el.img}">
					<div class="item-img__hover">
						<button class="item-img__hover-btn">${el.imgBtn}</button>
					</div>
				</div>
				<div class="item-description">
					<h4 class="item-title">${el.title}</h4>
					<p class="item-text">${el.text}</p>
					<p class="item-price">${el.price}</p>
				</div>
			</div>
`)
    });

})