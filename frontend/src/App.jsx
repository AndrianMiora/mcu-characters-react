import { useState, useEffect } from 'react';
import { getCharacters, addCharacter, updateCharacter, deleteCharacter } from './api';
import CharacterForm from './components/CharacterForm';
import CharactersTable from './components/CharactersTable';
import Filter from './components/Filter';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');
  const [editingCharacter, setEditingCharacter] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await getCharacters();
      setCharacters(response.data);
    } catch (error) {
      console.error('Failed to fetch characters', error);
    }
  };

  const handleAddCharacter = async (char) => {
    try {
      if (editingCharacter) {
        await updateCharacter(editingCharacter.id, char);
        setEditingCharacter(null);
      } else {
        await addCharacter(char);
      }
      fetchCharacters();
    } catch (error) {
      console.error('Failed to save character', error);
    }
  };

  const handleDeleteCharacter = async (id) => {
    try {
      await deleteCharacter(id);
      fetchCharacters();
    } catch (error) {
      console.error('Failed to delete character', error);
    }
  };

  const handleEditCharacter = (char) => setEditingCharacter(char);

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-4 flex flex-col justify-center items-center w-[100vw]">
      <h1 className="text-3xl font-bold mb-4 text-center text-red-400">Marvel Universe</h1>

      <Filter filter={filter} setFilter={setFilter} />

      <CharactersTable
        characters={filteredCharacters}
        onDeleteCharacter={handleDeleteCharacter}
        onEditCharacter={handleEditCharacter}
      />

      <CharacterForm onAddCharacter={handleAddCharacter} editingCharacter={editingCharacter} />
    </div>
  );
}

export default App;
