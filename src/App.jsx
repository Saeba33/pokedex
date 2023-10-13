import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"


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

const [pokemonIndex, setPokemonIndex] = useState(0);

const handlePrecedent = () => {
  if (pokemonIndex > 0) {
    setPokemonIndex(pokemonIndex -1);
  }
};

const handleSuivant = () => {
  if (pokemonIndex < pokemonList.length -1) {
    setPokemonIndex(pokemonIndex +1);
  }
};

return(
    <>
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    <button onClick={handlePrecedent} style={{ display: pokemonIndex === 0 ? 'none' : 'inline-block' }}>Précédent</button>
    <button onClick={handleSuivant} style={{ display: pokemonIndex === pokemonList.length - 1 ? 'none' : 'inline-block' }}>Suivant</button>
    </>
  );
}

export default App
