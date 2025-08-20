import { useModal } from "./composable/modal";

const { showModal, closeModal, addBtn, overlay  } = useModal();

addBtn?.addEventListener('click', () => {
    showModal();
})

overlay?.addEventListener('click', () => {
    closeModal();
})