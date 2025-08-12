import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import {searchBooks} from "../Api/SearchApi";



const Trending = () => {
    const [books, setBooks] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchItem(e.target.value);
    }

    const handleSearchClick = async () => {
        const filteredBooks = books.filter((book) =>
            book.volumeInfo?.title?.toLowerCase().includes(searchItem.toLowerCase())        );
        setBooks(filteredBooks);
    }

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await searchBooks("bestsellers");
            setBooks(data);
        };
        fetchBooks();
    }, []);

    return (
        <>
        <div className="SearchBarContainer">
            <input 
            type="text" 
            value={searchItem} 
            placeholder="Search for books..." 
            onChange={(e) => handleSearch(e)} 
            className="search-input"
            />
            <button 
            onClick={handleSearchClick}
            className="search-button"
            >Search</button>
        </div>
        <BookList books={books} />
        </>
    );
}

export default Trending;