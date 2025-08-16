export default function CharactersTable({ characters, onDeleteCharacter, onEditCharacter }) {
  return (
    <div className="overflow-x-auto mb-6 w-full max-w-3xl">
      <table className="mx-auto table-auto border-collapse border border-blue-100 w-full">
        <thead>
          <tr className="bg-blue-300 border-gray-300">
            <th className="border px-4 py-2 text-white">ID</th>
            <th className="border px-4 py-2 text-white">Name</th>
            <th className="border px-4 py-2 text-white">Real Name</th>
            <th className="border px-4 py-2 text-white">Universe</th>
            <th className="border px-4 py-2 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char, index) => (
            <tr
              key={char.id}
              className={`text-center ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100`}
            >
              <td className="border px-4 py-2">{char.id}</td>
              <td className="border px-4 py-2">{char.name}</td>
              <td className="border px-4 py-2">{char.realName}</td>
              <td className="border px-4 py-2">{char.universe}</td>
              <td className="border px-4 py-2 flex justify-center gap-2">
              <button
                className="text-black bg-green-600 px-2 py-1 rounded hover:bg-green-400"
                onClick={() => onEditCharacter(char)}
              >
                Edit
              </button>
              <button
                className="text-black bg-red-600 px-2 py-1 rounded hover:bg-red-400"
                onClick={() => onDeleteCharacter(char.id)}
              >
                Delete
              </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
