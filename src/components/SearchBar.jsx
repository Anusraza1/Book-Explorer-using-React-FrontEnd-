const SearchBar = ({ searchItem, setSearchItem, onSearch }) => {
  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="SearchBarContainer">
      <input
        type="text"
        value={searchItem}
        placeholder="Search for books..."
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
      <button onClick={handleSearchClick} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
