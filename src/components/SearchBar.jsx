const SearchBar = (prop) => {
  const { searchItem, setSearchItem, books, allBooks, setBooks } = prop;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchItem(value);
    if (value.trim() === "") {
      setBooks(allBooks);
    } else {
      const filteredBooks = books.filter((book) =>
        book.volumeInfo?.title?.toLowerCase().includes(value.toLowerCase())
      );
      setBooks(filteredBooks);
    }
  };

  return (
    <div className="SearchBarContainer">
      <input
        type="text"
        value={searchItem}
        placeholder="Search for books..."
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={() => handleInputChange({ target: { value: searchItem } })} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
