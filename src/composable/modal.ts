export const useModal = () => {

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const addBtn = document.querySelector('#addBook');
    const bookTitle = document.querySelector<HTMLInputElement>('#title');
    const bookAuthor = document.querySelector<HTMLInputElement>('#author');
    const bookPages = document.querySelector<HTMLInputElement>('#pages');
    const submitBtn = document.querySelector('#submit');

    const showModal = () => {
        modal?.classList.remove('hidden');
        overlay?.classList.remove('hidden');
    }

    const closeModal = () => {
        modal?.classList.add('hidden');
        overlay?.classList.add('hidden');
    }

    const getFormValues = () => {
        const title = bookTitle?.value.trim();
        const author = bookAuthor?.value.trim();
        const pages = bookPages?.value.trim();
        return {
            title,
            author,
            pages
        }
    }

    return {
        showModal,
        closeModal,
        addBtn,
        overlay,
        getFormValues,
        submitBtn
    }
}