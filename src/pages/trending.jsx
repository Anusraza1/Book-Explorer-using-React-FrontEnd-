import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import { searchBooks } from "../Api/SearchApi";
import SearchBar from "../components/SearchBar";

const Trending = () => {
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setBooks([]); // Optional: clear books while loading
      const data = await searchBooks("popular");
      setBooks(data);
      setAllBooks(data);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <SearchBar
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        books={books}
        allBooks={allBooks}
        setBooks={setBooks}
      />
      {loading ? <p>Loading books...</p> : <BookList books={books} />}
    </>
  );
};

export default Trending;
