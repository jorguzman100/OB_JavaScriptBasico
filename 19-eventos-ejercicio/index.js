const btn = document.querySelector('.alert');

btn.addEventListener('click', () => {
    alert('Click en el botón');
});

// jQuery

$(() => {
    $('.jQuery-btn').click(() => {
        console.log('Hola, estoy utilizando jQuery');
    });
});