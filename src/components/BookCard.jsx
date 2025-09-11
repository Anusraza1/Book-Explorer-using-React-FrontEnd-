import { Heart, LibraryBigIcon } from "lucide-react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BookCard = ({ book }) => {
  const { 
    title, 
    authors, 
    imageLinks, 
    infoLink, 
    publishedDate, 
    description, 
    categories // categories usually contain genres
  } = book.volumeInfo;
  // Only use localStorage for reading list here
  const [reading, setReading] = useLocalStorage("reading", []);
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  // Use favourites from props if available, else from localStorage
  const favList = favourites ?? [];
  const isFavourite = favList.some((fav) => fav.id === book.id);

  const isReading = reading.some((read) => read.id === book.id);

  const toggleFavourite = () => {
    const favList = JSON.parse(window.localStorage.getItem("favourites")) || [];
    if (isFavourite) {
      setFavourites(favList.filter((fav) => fav.id !== book.id));
    } else {
      setFavourites([...favList, book]);
    }
  };

  const toggleReading = () => {
    const currentReading = JSON.parse(window.localStorage.getItem("reading")) || [];
    if (isReading) {
      setReading(currentReading.filter((read) => read.id !== book.id));
    } else {
      setReading([...currentReading, book]);
    }
  };

  return (
    <div className="book-card">
      <div>
        <div className="book-card-actions">
          <button
            className="fav-btn"
            onClick={toggleFavourite}
            aria-label="Add to favourites"
          >
            <Heart
              size={20}
              stroke="black"
              fill={isFavourite ? "red" : "none"}
            />
          </button>
          <button
            className="read-btn"
            onClick={toggleReading}
            aria-label="Add to reading list"
          >
            <LibraryBigIcon
              size={20}
              stroke="black"
              fill={isReading ? "#4d4a4aff" : "none"}
            />
          </button>
        </div>
        <img
          src={
            imageLinks?.thumbnail ||
            "https://via.placeholder.com/128x192?text=No+Image"
          }
          alt={title}
          className="book-card-img"
        />
      </div>
      <div className="book-card-body">
        <h3>{title}</h3>
        <p><strong>Author(s):</strong> {authors?.join(", ") || "Unknown"}</p>
        <p><strong>Published:</strong> {publishedDate || "N/A"}</p>
        <p><strong>Genre:</strong> {categories?.join(", ") || "N/A"}</p>
        <p className="book-description">
          {description 
            ? description.length > 200 
              ? description.slice(0, 200) + "..." 
              : description 
            : "No description available."}
        </p>
        <a href={infoLink} target="_blank" rel="noopener noreferrer">
          More Info
        </a>
      </div>
    </div>
  );
};

export default BookCard;
