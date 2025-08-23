import { BookCard } from "./components/BookCard";
import { useLocalStorage } from "./composable/localstorage";
import { useModal } from "./composable/modal";
import { Book } from "./classes/Book";
import { useNotifications } from "./composable/notification";

const { showModal, closeModal, addBtn, overlay, getFormValues, submitBtn, ressetForm } = useModal();

const { readFromStorage, addToStorage, existingBooks } = useLocalStorage();

const { addSuccessNotification, addErrorNotification } = useNotifications();

addBtn?.addEventListener("click", () => {
  showModal();
});

overlay?.addEventListener("click", () => {
  closeModal();
});

submitBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  const regex = /^[\p{L}\p{N}\p{Z}]+$/u;
  const regex2 = /^[\p{L}\p{Z}.]+$/u;
  const { title, author, pages, status } = getFormValues();
  const pageNumber = parseInt(pages!);
  if (!title || !author || !pages) {
    addErrorNotification('All fields are required');
    return;
  }
  if (title.length < 3) {
    addErrorNotification('Title must be at least 3 digits');
    return;
  }
  if (title.length > 20) {
    addErrorNotification('Title can only contain 20 digits');
    return;
  }
    if (author.length < 3) {
    addErrorNotification('Author name must be at least 3 digits');
    return;
  }
  if (author.length > 30) {
    addErrorNotification('Author name can only contain 30 digits');
    return;
  }
  if(!regex.test(title)) {
    addErrorNotification('Title can only contain letters numbers or spaces');
    return;
  }
  if(!regex2.test(author)) {
    addErrorNotification('Author name can only contain letters or spaces');
    return;
  }
  if(pageNumber <= 0) {
    addErrorNotification('Page number cannot be 0 or lower');
    return;
  }
  const exist = existingBooks(title, author);
  if (exist && exist.length > 0) {
    addErrorNotification('This book already exists!');
    return;
  }
  try {
    if (title && author && pages) {
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
