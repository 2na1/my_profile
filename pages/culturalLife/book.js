import React, { useState } from "react";
import styles from "@/styles/BookList.module.css"; // Import your CSS module for styling

const BookList = () => {
  const [books, setBooks] = useState([
    "천 개의 파랑",
    "쓸 만한 인간",
    "눈물도 빛을 만나면 반짝인다",
    "나는 매주 시체를 보러 간다",
    "죽은자의 집 청소",
    "인간 실격",
    "여행의 이유",
    "살고 싶다는 농담",
  ]);
  const [newBook, setNewBook] = useState("");

  const handleAddBook = () => {
    if (newBook.trim() !== "") {
      setBooks([...books, newBook]);
      setNewBook("");
    }
  };

  return (
    <div className={styles.bookListContainer}>
      <h1>2023년 독서 목록</h1>

      <ul>
        {books.map((book, index) => (
          <li key={index}>📖 {book}</li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          placeholder="책 제목"
        />
        <button onClick={handleAddBook}>+</button>
      </div>
    </div>
  );
};

export default BookList;
