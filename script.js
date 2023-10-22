const button = document.getElementById('generate');

button.addEventListener('click', function(){
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let resultado = Math.floor(Math.random() * (max - min + 1)) + min; // Correção: de "Resultado" para "resultado"

    document.querySelector('#resultado > span').textContent = resultado; // Correção: de "Resultado" para "resultado"
});
