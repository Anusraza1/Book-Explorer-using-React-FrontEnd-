import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import { searchBooks } from "../Api/SearchApi";
import SearchBar from "../components/SearchBar";

const Trending = () => {
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0); // current page
  const [totalBooks, setTotalBooks] = useState(0); // total available results
  const booksPerPage = 12; // results per page

  // fetch function that works for both "popular" and search queries
  const fetchBooks = async (query = "popular", pageIndex = 0) => {
    setLoading(true);
    const startIndex = pageIndex * booksPerPage;

    const data = await searchBooks(query, startIndex, booksPerPage);

    setBooks(data.items);
    setAllBooks(data.items); // keep this if you still want local filtering
    setTotalBooks(data.totalItems);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks("popular", page);
  }, [page]);

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
