export const useModal = () => {

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const addBtn = document.querySelector('#addBook');
    let bookTitle = document.querySelector<HTMLInputElement>('#title');
    let bookAuthor = document.querySelector<HTMLInputElement>('#author');
    let bookPages = document.querySelector<HTMLInputElement>('#pages');
    let bookStatus = document.querySelector<HTMLInputElement>('#status');
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
        const status = bookStatus?.checked;
        return {
            title,
            author,
            pages,
            status
        }
    }

    const ressetForm = () => {
        bookTitle!.value = '';
        bookAuthor!.value = '';
        bookPages!.value = '';
        bookStatus!.checked = false;
    }

    return {
        showModal,
        closeModal,
        addBtn,
        overlay,
        getFormValues,
        submitBtn,
        ressetForm
    }
}