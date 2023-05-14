import axios from 'axios';
import { RickAndMortyAdapter } from '../adapters';

export const fetchMorty = async () => {
  const mortyUrl = 'https://rickandmortyapi.com/api/character/2';
  const response = await axios.get(mortyUrl);
  return RickAndMortyAdapter(response.data);
};
