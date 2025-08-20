import { useModal } from "./composable/modal";

const { showModal, closeModal, addBtn, overlay, getFormValues, submitBtn  } = useModal();

addBtn?.addEventListener('click', () => {
    showModal();
});

overlay?.addEventListener('click', () => {
    closeModal();
});

submitBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const { title, author, pages } = getFormValues();
    if (!title || !author || !pages) {
        alert('All fields are required');
    }
})