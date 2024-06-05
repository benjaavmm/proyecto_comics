$(document).ready(function() {
    const comics = [
        { name: 'The Flash N\u00b052', link: 'flash1.html', img: './assets/img/flash.jpg', price: '$21.990' },
        { name: 'Green Lantern: Tales of the Sinestro Corps', link: 'linternaverde1.html', img: './assets/img/linternaverde.jpg', price: '$19.990' },
        { name: 'Batman: Detective Comics #400', link: 'batman1.html', img: './assets/img/batman1.jpg', price: '$23.990' },
        { name: 'Dragon Ball #12: El Desaf\u00edo de Goku y Vegeta', link: 'dragonball.html', img: './assets/img/dragonball.jpg', price: '$13.990' },
        { name: 'Demon Slayer', link: 'demonslayer.html', img: './assets/img/demonslayer.jpg', price: '$11.990' },
        { name: 'Batman Beyond', link: 'batman2.html', img: './assets/img/batman2.jpg', price: '$21.990' },
        { name: 'The Amazing Spider-Man', link: 'spiderman1.html', img: './assets/img/spiderman.jpg', price: '$18.990' },
        { name: 'Naruto', link: 'naruto1.html', img: './assets/img/naruto.jpg', price: '$11.990' },
        { name: 'Aquaman #14: La Marea del Terror', link: 'Aquaman.html', img: './assets/img/aquaman1.jpg', price: '$18.890' },
        { name: 'Liga de la Justicia #27: Legado', link: 'ligadelajusticia.html', img: './assets/img/ligadelajusticia1.jpg', price: '$20.990' },
        { name: 'Supergirl #3: El Reinado de los Superhombres Cibernéticos', link: 'supergirl.html', img: './assets/img/Supergirl.jpg', price: '$17.000' },
        { name: 'Superman #264: El Secreto del Mariscal de Campo Fantasma', link: 'superman.html', img: './assets/img/superman1.jpg', price: '$18.800' },
        { name: 'Jovenes Titanes #1: El Reinado de los Superhombres Cibernéticos', link: 'titans.html', img: './assets/img/titans.png', price: '$19.900' },
        { name: 'The Incredible Hulk And Now The Wolverine!', link: 'hulk.html', img: './assets/img/hulk.png', price: '$22.990' },
        { name: 'The Astonishing Ant-Man', link: 'antman.html', img: './assets/img/antman.jpg', price: '$23.990' },
        { name: 'The Avengers: Captain America Lives Again!', link: 'capitanamerica.html', img: './assets/img/capitanamerica.jpg', price: '$22.990' },
        { name: 'Marvel Super Heroes: Secret Wars', link: 'secretwars.html', img: './assets/img/secretwars.jpg', price: '$20.990' },
        { name: 'The Invincible Iron Man: Cry Revolution!', link: 'ironman.html', img: './assets/img/ironman.jpg', price: '$24.990' },
        { name: 'The Mighty Thor: The Wrath Of Odin!', link: 'thor.html', img: './assets/img/thor.jpg', price: '$21.990' },
        { name: 'Black Widow: Widow\'s Sting', link: 'blackwidow.html', img: './assets/img/blackwidow.jpg', price: '$24.990' },
        { name: 'Jujutsu Kaisen', link: 'jujutsukaisen.html', img: './assets/img/jujutsukaisen.jpg', price: '$13.990' },
        { name: 'Tokyo Revengers', link: 'tokyorevengers.html', img: './assets/img/tokyorevengers.jpg', price: '$12.990' },
        { name: 'My Hero Academia', link: 'myheroacademia.html', img: './assets/img/myheroacademia.jpg', price: '$11.990' },
        { name: 'Attack On Titan', link: 'attackontitan.html', img: './assets/img/atackontitan.jpg', price: '$12.990' },
        { name: 'Hunter X Hunter', link: 'hunterxhunter.html', img: './assets/img/hxh.jpg', price: '$13.990' }
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
                            <input type="number" class="form-control mb-2" placeholder="Cantidad" min="1" value="1">
                            <button class="btn btn-primary">A\u00f1adir al Carro</button>
                        </div>
                    </div>
                `;
            });
            resultHtml += '</div></div>';
            $('body').html(resultHtml); // Reemplaza el contenido del body con los resultados
        } else {
            $('body').html('<div class="container mt-5"><p class="text-center">No se encontraron resultados para "' + query + '"</p></div>');
        }
    });
});

$(document).ready(function() {
    // Arreglo para almacenar los elementos en el carrito
    let cartItems = [];

    // Función para agregar elementos al carrito
    $('.add-to-cart').on('click', function(event) {
        event.preventDefault();
        
        // Obtener información del cómic
        const comicBox = $(this).closest('.comic-box');
        const comicName = comicBox.find('h3').text();
        const comicPrice = parseFloat(comicBox.find('.comic-price').text().replace('$', ''));
        const comicQuantity = parseInt(comicBox.find('input').val());

        // Verificar si el cómic ya está en el carrito
        const existingItem = cartItems.find(item => item.name === comicName);
        if (existingItem) {
            existingItem.quantity += comicQuantity;
        } else {
            cartItems.push({
                name: comicName,
                price: comicPrice,
                quantity: comicQuantity
            });
        }

        // Actualizar el contador del carrito
        updateCartCount();

        // Mostrar mensaje de confirmación
        alert('Se ha añadido al carrito: ' + comicName);

        // Actualizar la visualización del carrito
        displayCartItems();
    });

    // Función para actualizar el contador del carrito
    function updateCartCount() {
        const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        $('#cart-count').text(totalCount);

        // Mostrar u ocultar la sección del carrito dependiendo de si hay elementos en él
        if (totalCount > 0) {
            $('#cart-icon').addClass('active');
        } else {
            $('#cart-icon').removeClass('active');
        }
    }

    // Función para mostrar los elementos en el carrito
    function displayCartItems() {
        $('#cart-items').empty();
        let totalAmount = 0;
        cartItems.forEach(item => {
            const totalPrice = item.price * item.quantity;
            totalAmount += totalPrice;
            $('#cart-items').append(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item.name} - ${item.quantity} unidades - $${totalPrice.toFixed(2)}
                    <button class="btn btn-danger remove-from-cart" data-name="${item.name}">&times;</button>
                </li>
            `);
        });
        $('#cart-total-page').text(totalAmount.toFixed(2));
    }

    // Función para remover elementos del carrito
    $(document).on('click', '.remove-from-cart', function() {
        const itemName = $(this).data('name');
        cartItems = cartItems.filter(item => item.name !== itemName);
        updateCartCount();
        displayCartItems();
    });

    // Inicializar la visualización del carrito
    updateCartCount();
    displayCartItems();
});
