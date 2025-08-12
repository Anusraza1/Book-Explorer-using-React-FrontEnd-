const BookCard = ({ book }) => {
  const { title, authors, description, imageLinks, infoLink } = book.volumeInfo;

  return (
    <div className="book-card">
      <img
        src={imageLinks?.thumbnail || "https://via.placeholder.com/128x192?text=No+Image"}
        alt={title}
        className="book-card-img"
      />
      <div className="book-card-body">
        <h3>{title}</h3>
        <p className="book-card-authors">{authors?.join(", ")}</p>
        <p className="book-card-desc">{description ? description.slice(0, 100) + "..." : "No description available"}</p>
        <a href={infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
      </div>
    </div>
  );
};

export default BookCard;