import type { Book } from "../classes/Book";

export const useLocalStorage = () => {
  const addToStorage = (book: Book) => {
    const exist = localStorage.getItem("books");

    if (!exist) {
      return localStorage.setItem("books", JSON.stringify(book));
    } else {
      const storage: string | null = localStorage.getItem("books");
      const books = Array.from(JSON.parse(storage!));
      books.push(book);
      return localStorage.setItem("books", JSON.stringify(books));
    }
  };

  const readfromStorage = () => {
    const storage = localStorage.getItem("books");
    if (!storage) return;
    return JSON.parse(storage);
  };

  return { addToStorage, readfromStorage };
};
