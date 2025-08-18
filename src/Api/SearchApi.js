export async function searchBooks(query, startIndex = 0, maxResults = 12) {
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    query
  )}&key=${apiKey}&startIndex=${startIndex}&maxResults=${maxResults}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();

    return {
      items: data.items || [],
      totalItems: data.totalItems || 0, // important for pagination
    };
  } catch (error) {
    console.error("Error fetching books:", error);
    return {
      items: [],
      totalItems: 0,
    };
  }
}
