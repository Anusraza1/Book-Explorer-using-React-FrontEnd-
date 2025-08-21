import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import { searchBooks } from "../Api/SearchApi";
import SearchBar from "../components/SearchBar";

const Trending = () => {
  const [books, setBooks] = useState([]);
  const [searchItem, setSearchItem] = useState(""); // actual search term
  const [inputValue, setInputValue] = useState(""); // input field value
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);
  const booksPerPage = 12;

  const fetchBooks = async (query = "popular", pageIndex = 0) => {
    setLoading(true);
    const startIndex = pageIndex * booksPerPage;
    const data = await searchBooks(query, startIndex, booksPerPage);
    setBooks(data.items || []);
    setTotalBooks(data.totalItems || 0);
    setLoading(false);
  };

  useEffect(() => {
    const query = searchItem.trim() ? searchItem : "popular";
    fetchBooks(query, page);
    // eslint-disable-next-line
  }, [searchItem, page]);

  useEffect(() => {
    if (inputValue === "") {
      setSearchItem("popular");
      setPage(0);
    }
  }, [inputValue]);

  const handleSearch = () => {
    setSearchItem(inputValue.trim() ? inputValue : "popular"); // use "popular" if input is empty
    setPage(0); // reset to first page
  };

  return (
    <>
      <SearchBar
        searchItem={inputValue}
        setSearchItem={setInputValue}
        onSearch={handleSearch}
      />
      {loading ? <p>Loading books...</p> : <BookList books={books} />}
      <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          Prev
        </button>
        <span style={{ margin: "0 1rem" }}>
          Page {page + 1} of {Math.ceil(totalBooks / booksPerPage)}
        </span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={(page + 1) * booksPerPage >= totalBooks}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Trending;
