import React, { useState, useEffect, FormEvent } from 'react';
import api from   '../../services/api';

import { Title, Form, Words, Error, Img } from './styles';
import logoImg from '../../assets/logo.png';

interface Word {
  id: string;
  name: string;
  definition: string;
  masculine_noun: string;
  adjective: string;
  state: string;
  city: string;
}

const Search: React.FC =  () => {
  const [ newWord, setNewWord ] = useState(''); // valor do input
  const [ words, setWords ] = useState<Word[]>([]);

  async function handleAddWord(event: FormEvent<HTMLFormElement>):
  Promise<void>{
    event.preventDefault();

    const response = await api.get(`words/${newWord}`)

    const word = response.data;

    setWords([...words, word]);
  }

  return (
    <>
      <Img src={logoImg} alt="Regionaliz" />
      <Title>Regionaliz, o seu buscador de palavras informais...</Title>
      <Form onSubmit={handleAddWord}>
        <input
        value={newWord}
        onChange={ e => setNewWord(e.target.value)}
        type="text"
        placeholder="Digite uma palavra..."
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Words>
       { words.map( word => (
          <a key={word.id}>
          <div>
            <strong>{word.name}</strong>
            <p>{word.definition}</p>
            <h2>substantivo masculino</h2>
            <p>{word.masculine_noun}</p>
            <h2>Adjetivo</h2>
            <p>{word.adjective}</p>
            <h2>Usado</h2>
            <p>{`Cidade: ${word.city}, Estado: ${word.state}`}</p>
          </div>
        </a>
       ))};
      </Words>
    </>
  )
};

export default Search;
