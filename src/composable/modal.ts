export const useModal = () => {

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const addBtn = document.querySelector('#addBook');
    let bookTitle = document.querySelector<HTMLInputElement>('#title');
    let bookAuthor = document.querySelector<HTMLInputElement>('#author');
    let bookPages = document.querySelector<HTMLInputElement>('#pages');
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

    const ressetForm = () => {
        bookTitle!.value = '';
        bookAuthor!.value = '';
        bookPages!.value = '';
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