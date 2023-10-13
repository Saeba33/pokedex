import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  function App() {
    const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]); // Initialisé avec le premier élément du tableau
  
    const handlePokemonSelection = (pokemon) => {
      setSelectedPokemon(pokemon);
    };
  
    return (
      <>
        <PokemonCard pokemon={selectedPokemon} />
        <NavBar pokemonList={pokemonList} selectedPokemon={handlePokemonSelection} />
      </>
    );
  }
  
  export default App;