const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const sendnum = document.getElementById('button');
 
button.addEventListener('click', () => {
        const num = document.getElementById('num').value;

        if (num.length == 0 || num .value <= 0 || num.value >= 899) {
            
            app.innerHTML = `<p style="text-align: center">Ingrese un numero válido por favor 👾</p>`
        }

        else{

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
        
})}
})


