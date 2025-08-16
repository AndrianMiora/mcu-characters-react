export default function Filter({ filter, setFilter }) {
  return (
    <div className="mb-4 text-center w-[25vw]">
      <input
        type="text"
        placeholder="Search character..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded w-1/2"
      />
    </div>
  );
}
