$(document).ready(function() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const limit = 100; // Obtener 100 Pokémon

    $('#loadPokemonButton').on('click', function() {
        fetchPokemon();
    });

    function fetchPokemon() {
        $.ajax({
            url: `${apiUrl}?limit=${limit}`,
            method: 'GET',
            success: function(response) {
                const pokemonList = response.results;
                const pokemonContainer = $('#pokemon-list');

                pokemonContainer.empty();

                pokemonList.forEach(function(pokemon) {
                    $.ajax({
                        url: pokemon.url,
                        method: 'GET',
                        success: function(pokemonData) {
                            const name = pokemonData.name;
                            const imageUrl = pokemonData.sprites.front_default;
                            const types = pokemonData.types.map(type => type.type.name).join(', ');

                            const card = `
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="${imageUrl}" class="card-img-top" alt="${name}">
                                        <div class="card-body">
                                            <h5 class="card-title">${name}</h5>
                                            <p class="card-text">Tipo(s): ${types}</p>
                                        </div>
                                    </div>
                                </div>
                            `;
                            pokemonContainer.append(card);
                        },
                        error: function() {
                            console.error(`Error al obtener los datos de ${pokemon.name}`);
                        }
                    });
                });
            },
            error: function() {
                console.error('Error al obtener la lista de Pokémon');
            }
        });
    }
});
