import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import BookList from "../components/BookList";
import "../styles/main.css";

const Favourite = () => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  const [reading, setReading] = useLocalStorage("reading", []);
  const [completed, setCompleted] = useLocalStorage("completed", []);
  const [activeTab, setActiveTab] = useState("favourites"); // default

  const tabs = [
    { key: "favourites", label: `Favourites (${favourites.length})` },
    { key: "reading", label: `Reading (${reading.length})` },
    { key: "completed", label: `Read (${completed.length})` },
  ];

  return (
    <div className="favourite-container">
      <h1 className="favourite-title">My Favriutes & Reading List</h1>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {activeTab === "favourites" &&
          (favourites.length > 0 ? (
            <BookList
              books={favourites}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          ) : (
            <p className="empty-msg">No favourites yet!</p>
          ))}

        {activeTab === "reading" &&
          (reading.length > 0 ? (
            <BookList
              books={reading}
              reading={reading}
              setReading={setReading}
            />
          ) : (
            <p className="empty-msg">No books in Reading List!</p>
          ))}

        {activeTab === "completed" &&
          (completed.length > 0 ? (
            <BookList
              books={completed}
              completed={completed}
              setCompleted={setCompleted}
            />
          ) : (
            <p className="empty-msg">No completed books yet!</p>
          ))}
      </div>
    </div>
  );
};

export default Favourite;
