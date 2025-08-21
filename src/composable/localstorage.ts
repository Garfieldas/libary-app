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

  return { addToStorage, readFromStorage, deleteFromStorage };
};
