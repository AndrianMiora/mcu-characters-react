import { useState, useEffect } from 'react';

export default function CharacterForm({ onAddCharacter, editingCharacter }) {
  const [name, setName] = useState('');
  const [realName, setRealName] = useState('');
  const [universe, setUniverse] = useState('');

  useEffect(() => {
    if (editingCharacter) {
      setName(editingCharacter.name);
      setRealName(editingCharacter.realName);
      setUniverse(editingCharacter.universe);
    } else {
      setName('');
      setRealName('');
      setUniverse('');
    }
  }, [editingCharacter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !realName || !universe) return;
    onAddCharacter({ name, realName, universe });
    setName('');
    setRealName('');
    setUniverse('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-2">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Real Name"
        value={realName}
        onChange={(e) => setRealName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Universe"
        value={universe}
        onChange={(e) => setUniverse(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="text-black p-2 rounded mt-2">
        {editingCharacter ? 'Update Character' : 'Add Character'}
      </button>
    </form>
  );
}
