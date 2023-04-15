// $(() => {});

$(document).ready(() => {
    $('ul').hide();
    $('ul').fadeIn(2000);
    $('.fadeIn-btn').click(() => {
        console.log('fadeIn');
        $('section').fadeIn(2000);
    });
    $('.fadeOut-btn').click(() => {
        console.log('fadeOut');
        $('section').fadeOut(2000);
    });

    // Add sections
    $('.addSection-btn').click(() => {
        $('main').append(
            `<section>
                <h2>New section</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam sequi saepe eaque ad debitis beatae impedit vitae fuga, cupiditate explicabo qui consequatur at voluptatem?</p>
            </section>`
        );
    });

    // Cambiar color de texto
    $('*').mouseover((event) => {
        event.target.style.color = 'blue';
    });
    $('*').mouseleave((event) => {
        event.target.style.color = 'black';
    });

});
