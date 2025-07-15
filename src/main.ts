import { useeModal } from "./composable/modal";

const { showModal, closeModal, addBtn, overlay  } = useeModal();

addBtn?.addEventListener('click', () => {
    showModal();
})

overlay?.addEventListener('click', () => {
    closeModal();
})