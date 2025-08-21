import BookCard from "./BookCard";

const BookList = ({ books, favourites, setFavourites }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      ))}
    </div>
  );
};

export default BookList;