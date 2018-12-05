const resultInfo = document.querySelector('#resultados-info');
const cards = document.querySelectorAll('#resultados');
const buscar = document.querySelector('#btn-buscar');

buscar.onclick = () => {
    resultInfo.style = 'visibility: visible';
    resultados.style = 'display: flex;';
};