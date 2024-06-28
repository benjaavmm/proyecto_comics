$(document).ready(function() {
    const apiURL = 'https://pokeapi.co/api/v2/version/';

    function fetchPokemonGames() {
        $.ajax({
            url: apiURL,
            method: 'GET',
            success: function(response) {
                const games = response.results;
                const gamesList = $('#pokemon-games-list');

                gamesList.empty();


                games.forEach(function(game) {
                    const listItem = $('<li></li>').text(game.name);
                    gamesList.append(listItem);
                });
            },
            error: function() {
                alert('Error al obtener los juegos de Pokémon.');
            }
        });
    }

    fetchPokemonGames();
});
