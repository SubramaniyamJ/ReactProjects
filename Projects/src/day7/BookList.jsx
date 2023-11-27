import React, { useState, useEffect } from "react";
const BookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://example.com/books");
        const data = await response.json();
        const transformedData = data.data.map((book) => ({
          id: book.id,
          title: book.title,
          author: book.author,
        }));
        setBooks(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookList;
