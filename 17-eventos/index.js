const form = document.getElementById('form');
const texto = document.getElementById('texto');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submit');
    console.log(event);
});

const cambiaTexto = (id, nuevoTexto, color) => {
    const evento = new CustomEvent('cambiaTexto', {
        detail: {
            id,
            nuevoTexto,
            color
        }
    });
    document.getElementById(id).dispatchEvent(evento);
}

texto.addEventListener('cambiaTexto', (event) => {
    console.log(event);
    document.getElementById(event.detail.id).innerText = event.detail.nuevoTexto;
    document.getElementById(event.detail.id).style.color = event.detail.color;
});