const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const sendnum = document.getElementById('button');
const num = document.getElementById('num').value;

button.addEventListener('click', () => {
	const pokemonId = document.getElementById("num").value;
	fetch(`${API_URL}${pokemonId}`)
	.then(response => response.json())
	.then(data => {
		const app = document.getElementById('app');
		app.innerHTML = `
		<div id="atributos">
		<div>${data.name}</div>
		<div><img src="${data.sprites.front_default}" height="100"></div>
		</div>
		`;
		document.getElementById('num').value = "";
})
})




