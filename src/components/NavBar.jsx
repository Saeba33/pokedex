function NavBar({ pokemonList, selectedPokemon }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button
          key={index}
          onClick={() => {
            selectedPokemon(pokemon);
            if (pokemon.name === 'pikachu') {
              alert(`Pika Pikachu!!!`);
            }
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;