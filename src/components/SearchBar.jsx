export const SearchBar = ({ setQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar fotos..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
