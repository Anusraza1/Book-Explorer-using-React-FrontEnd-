import { useState } from "react";
import { Heart, LibraryBigIcon} from "lucide-react";

const BookCard = ({ book }) => {
  const { title, authors, imageLinks, infoLink } = book.volumeInfo;
  const [hovered, setHovered] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isReading, setIsReading] = useState(false);

  return (
    <div
      className="book-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        {hovered && (
          <div className="book-card-actions">
            <button
              className="fav-btn"
              onClick={() => setIsFavourite(!isFavourite)}
            >
              <Heart
                size={20}
                stroke="black"
                fill={isFavourite ? "red" : "none"} // fill black if true
              />
            </button>
            <button
              className="read-btn"
              onClick={() => setIsReading(!isReading)}
            >
              <LibraryBigIcon
                size={20}
                stroke="black"
                fill={isReading ? "#4d4a4aff" : "none"} // fill black if true
              />
            </button>
          </div>
        )}
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
        <p>{authors?.join(", ")}</p>
        <a href={infoLink} target="_blank" rel="noopener noreferrer">
          More Info
        </a>
      </div>
    </div>
  );
};

export default BookCard;
