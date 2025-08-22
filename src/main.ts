import { BookCard } from "./components/BookCard";
import { useLocalStorage } from "./composable/localstorage";
import { useModal } from "./composable/modal";
import { Book } from "./classes/Book";

const { showModal, closeModal, addBtn, overlay, getFormValues, submitBtn, ressetForm } = useModal();

const { addToStorage, readFromStorage } = useLocalStorage();

addBtn?.addEventListener("click", () => {
  showModal();
});

overlay?.addEventListener("click", () => {
  closeModal();
});

submitBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  const { title, author, pages, status } = getFormValues();
  if (!title || !author || !pages) {
    alert("All fields are required");
  }
  try {
    if (title && author && pages) {
      const pageNumber = parseInt(pages);
      const newBook = new Book(title, author, pageNumber, status!);
      BookCard(newBook);
      addToStorage(newBook)
      alert('Book added successfully!');
      closeModal();
      ressetForm();
    }
  } catch (error: any) {
    alert('Something went wrong');
    closeModal();
  }
});

window.addEventListener('load', () => {
  const books = readFromStorage();
  if (!books) return;
  books.forEach((book: Book) => {
    BookCard(book);
  });
})
