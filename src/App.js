import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character'
import './App.css';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err)
      })

  }, [page])

  return (
   
      <StlyedApp>
        <div className="App">
          <h1>Characters</h1>
          {characters.map(char => {
            return <Character key={char.id} character={char} />
          })}
        </div>
       
      </StlyedApp>
 
  );
}

export default App;