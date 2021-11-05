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
		<div>Nombre: ${data.name} <br> Altura: ${data.height * 10} cm <br> Peso: ${data.weight} kg</div>
		<div><img src="${data.sprites.front_default}" height="150"></div>
		</div>
		`;
		document.getElementById('num').value = "";
})
})




