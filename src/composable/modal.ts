export const useModal = () => {

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const addBtn = document.querySelector('#addBook');
    const bookTitle = document.querySelector('#title');
    const bookAuthor = document.querySelector('#author');
    const bookPages = document.querySelector('#pages');

    const showModal = () => {
        modal?.classList.remove('hidden');
        overlay?.classList.remove('hidden');
    }

    const closeModal = () => {
        modal?.classList.add('hidden');
        overlay?.classList.add('hidden');
    }

    const getFormValues = () => {
        const title = bookTitle?.textContent;
        const author = bookAuthor?.textContent;
        const pages = bookPages?.textContent;
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
        getFormValues
    }
}