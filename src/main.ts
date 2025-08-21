import { BookCard } from "./components/BookCard";
import { useLocalStorage } from "./composable/localstorage";
import { useModal } from "./composable/modal";
import { Book } from "./classes/Book";

const { showModal, closeModal, addBtn, overlay, getFormValues, submitBtn, ressetForm } = useModal();

const { addToStorage, readfromStorage } = useLocalStorage();

addBtn?.addEventListener("click", () => {
  showModal();
});

overlay?.addEventListener("click", () => {
  closeModal();
});

submitBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  const { title, author, pages } = getFormValues();
  if (!title || !author || !pages) {
    alert("All fields are required");
  }
  try {
    if (title && author && pages) {
      const pageNumber = parseInt(pages);
      const status = false;
      BookCard({ title, author, pages: pageNumber, status });
      addToStorage({ title, author, pages: pageNumber, status })
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
  const books = readfromStorage();
  if (!books) return;
  books.forEach((book: Book) => {
    BookCard(book);
  });
})
