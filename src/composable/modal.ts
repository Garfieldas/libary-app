export const useeModal = () => {

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const addBtn = document.querySelector('#addBook');

    const showModal = () => {
        modal?.classList.remove('hidden');
        overlay?.classList.remove('hidden');
    }

    const closeModal = () => {
        modal?.classList.add('hidden');
        overlay?.classList.add('hidden');
    }

    return {
        showModal,
        closeModal,
        addBtn,
        overlay
    }
}