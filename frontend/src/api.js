import axios from 'axios';

const API_URL = 'http://localhost:3000/characters';

export const getCharacters = () => axios.get(API_URL);
export const getCharacter = (id) => axios.get(`${API_URL}/${id}`);
export const addCharacter = (char) => axios.post(API_URL, char);
export const updateCharacter = (id, char) => axios.put(`${API_URL}/${id}`, char);
export const deleteCharacter = (id) => axios.delete(`${API_URL}/${id}`);
