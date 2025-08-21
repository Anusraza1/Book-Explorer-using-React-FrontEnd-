import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  return (
    <div className="book-details">
      <h1>Book ID: {id}</h1>
      {/* later: fetch book info from API or localStorage using this id */}
    </div>
  );
};

export default BookDetails;
