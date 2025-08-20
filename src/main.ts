import { BookCard } from "./components/BookCard";
import { useModal } from "./composable/modal";

const { showModal, closeModal, addBtn, overlay, getFormValues, submitBtn } =
  useModal();

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
      closeModal();
    }
  } catch (error: any) {
    alert('Something went wrong');
    closeModal();
  }
});
