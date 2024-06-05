$(document).ready(function() {
    const comics = [
        { name: 'The Flash N°52', link: 'flash1.html', img: './assets/img/flash.jpg', price: '$21.990' },
        { name: 'Green Lantern: Tales of the Sinestro Corps', link: 'linternaverde1.html', img: './assets/img/linternaverde.jpg', price: '$19.990' },
        { name: 'Batman', link: 'batman1.html', img: './assets/img/batman1.jpg', price: '$23.990' },
        { name: 'Dragon Ball', link: 'dragonball.html', img: './assets/img/dragonball.jpg', price: '$13.990' },
        { name: 'Demon Slayer', link: 'demonslayer.html', img: './assets/img/demonslayer.jpg', price: '$11.990' },
        { name: 'Batman Beyond', link: 'batman2.html', img: './assets/img/batman2.jpg', price: '$21.990' },
        { name: 'The Amazing Spider-Man', link: 'spiderman1.html', img: './assets/img/spiderman.jpg', price: '$18.990' },
        { name: 'Naruto', link: 'naruto1.html', img: './assets/img/naruto.jpg', price: '$11.990' },
    ];

    $('#searchForm').on('submit', function(event) {
        event.preventDefault();
        const query = $('#searchInput').val().toLowerCase();
        const results = comics.filter(comic => comic.name.toLowerCase().includes(query));

        if (results.length > 0) {
            let resultHtml = '<div class="container mt-5"><div class="row">';
            results.forEach(comic => {
                resultHtml += `
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="comic-box">
                            <a href="${comic.link}">
                                <img src="${comic.img}" alt="${comic.name}" class="comic-image">
                            </a>
                            <h3>${comic.name}</h3>
                            <p>${comic.price}</p>
                        </div>
                    </div>
                `;
            });
            resultHtml += '</div></div>';
            $('body').html(resultHtml);
        } else {
            $('body').html('<div class="container mt-5"><p class="text-center">No se encontraron resultados para "' + query + '"</p></div>');
        }
    });
});
