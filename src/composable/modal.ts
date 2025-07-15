export const toggleModal = () => {

    const modal = document.querySelector('modal');
    const overlay = document.querySelector('overlay');

    const showModal = () => {
        modal?.classList.remove('hidden');
        overlay?.classList.remove('hidden');
    }

    const closeModal = () => {
        modal?.classList.add('hidden');
        overlay?.classList.add('hidden');
    }

    return {
        modal,
        overlay,
        showModal,
        closeModal
    }
}