import type { Book } from "../classes/Book";

export const useLocalStorage = () => {
  const addToStorage = (book: Book) => {
    const exist = localStorage.getItem("books");

    if (!exist) {
      const books = [];
      books.push(book);
      return localStorage.setItem("books", JSON.stringify(books));
    } else {
      const storage: string | null = localStorage.getItem("books");
      const books = Array.from(JSON.parse(storage!));
      books.push(book);
      return localStorage.setItem("books", JSON.stringify(books));
    }
  };

  const readFromStorage = () => {
    const storage = localStorage.getItem("books");
    if (!storage) return;
    return JSON.parse(storage);
  };

  const deleteFromStorage = (id: string) => {
    const storage: string | null = localStorage.getItem("books");
    const books = Array.from(JSON.parse(storage!));
    const filteredBooks = JSON.stringify(
      books.filter((item: any) => item.id !== id)
    );
    return localStorage.setItem("books", filteredBooks);
  };

  const updateLocalStorage = (id: string) => {
    const storage: string | null = localStorage.getItem("books");
    const books: Book[] = Array.from(JSON.parse(storage!));
    const bookIndex = books.findIndex((book: Book) => book.id === id);
    books[bookIndex].status = !books[bookIndex].status;
    const updatedBooks = JSON.stringify(books);
    return localStorage.setItem("books", updatedBooks);
  };

  const existingBooks = (title: string, author: string) => {
    const existingBooks = readFromStorage();
    const exist = existingBooks.filter(
      (item: Book) =>
        item.title.toLowerCase() === title.toLowerCase() &&
        item.author.toLowerCase() === author.toLowerCase()
    );
    return exist;
  };

  return {
    addToStorage,
    readFromStorage,
    deleteFromStorage,
    updateLocalStorage,
    existingBooks,
  };
};
