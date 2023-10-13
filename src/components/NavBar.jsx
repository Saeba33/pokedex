function NavBar({ pokemonList, selectedPokemon }) {
    return (
      <>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => selectedPokemon(pokemon)}>
            {pokemon.name}
          </button>
        ))}
      </>
    );
  }
  
  export default NavBar;