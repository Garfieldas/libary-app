import type { Book } from "../classes/Book";

export const useLocalStorage = () => {

  const readFromStorage = () => {
    const storage = localStorage.getItem("books");
    if (!storage) return;
    return JSON.parse(storage);
  };

  const addToStorage = (book: Book) => {
    const exist = readFromStorage();

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

  const updateLocalStorage = (id: string) => {
    const books = readFromStorage();
    const bookIndex = books.findIndex((book: Book) => book.id === id);
    books[bookIndex].status = !books[bookIndex].status;
    const updatedBooks = JSON.stringify(books);
    return localStorage.setItem("books", updatedBooks);
  };

  const deleteFromStorage = (id: string) => {
    const books = readFromStorage();
    const filteredBooks = JSON.stringify(
      books.filter((item: any) => item.id !== id)
    );
    return localStorage.setItem("books", filteredBooks);
  };

  const existingBooks = (title: string, author: string) => {
    const existingBooks = readFromStorage();
    if (!existingBooks) return;
    const exist = existingBooks.filter(
      (item: Book) =>
        item.title.toLowerCase() === title.toLowerCase() &&
        item.author.toLowerCase() === author.toLowerCase()
    );
    return exist;
  };

  return {
    readFromStorage,
    addToStorage,
    updateLocalStorage,
    deleteFromStorage,
    existingBooks,
  };
};
