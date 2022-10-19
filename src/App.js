import { useState } from 'react';
import './App.css';
import Characters from './components/characters';
import imageRM from './img/rick-morty.png';

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    // console.log(characterApi);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {
          characters ? (
            <Characters characters={characters} setCharacters={setCharacters}></Characters>
          ) : (
            <>
              <img src={imageRM} alt="Rick & Morty" className='img-home' />
              <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
            </>
          )
        }
        
      </header>
    </div>
  );
}

export default App;
