import { BookCard } from "./components/BookCard";
import { useLocalStorage } from "./composable/localstorage";
import { useModal } from "./composable/modal";
import { Book } from "./classes/Book";
import { useNotifications } from "./composable/notification";

const { showModal, closeModal, addBtn, overlay, getFormValues, submitBtn, ressetForm } = useModal();

const { addToStorage, readFromStorage, existingBooks } = useLocalStorage();

const { addSuccessNotification, addErrorNotification } = useNotifications();

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
    addErrorNotification('All fields are required');
    return;
  }
  const exist = existingBooks(title, author);
  if (exist && exist.length > 0) {
    addErrorNotification('This book already exists!');
    return;
  }
  try {
    if (title && author && pages) {
      const pageNumber = parseInt(pages);
      const newBook = new Book(title, author, pageNumber, status!);
      BookCard(newBook);
      addToStorage(newBook)
      addSuccessNotification('Book added!');
      closeModal();
      ressetForm();
    }
  } catch (error: any) {
    addErrorNotification(error);
    closeModal();
  }
});

window.addEventListener('load', () => {
  const books = readFromStorage();
  if (!books || books.length === 0) return;
  books.forEach((book: Book) => {
    BookCard(book);
  });
  addSuccessNotification('Books loaded!');
})
