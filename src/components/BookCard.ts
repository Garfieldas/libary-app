import type { Book } from "../classes/Book";
import { useLocalStorage } from "../composable/localstorage";

const { deleteFromStorage, updateLocalStorage } = useLocalStorage();

export const BookCard = (book: Book) => {
    const cardContainer = document.querySelector('.card-wrapper');
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('id', book.id!);

    const h3 = document.createElement('h3');
    const i = document.createElement('i');
    i.className = 'fa-solid fa-bookmark';
    h3.appendChild(i);
    const title = document.createTextNode(` ${book.title}`)
    h3.appendChild(title);
    card.appendChild(h3);

    const p1 = document.createElement('p');
    const strong1 = document.createElement('strong');
    strong1.textContent = 'Author: ';
    p1.appendChild(strong1);
    const author = document.createTextNode(`${book.author}`)
    p1.appendChild(author);
    card.appendChild(p1);

    const p2 = document.createElement('p');
    const strong2 = document.createElement('strong');
    strong2.textContent = 'Pages: ';
    const pages = document.createTextNode(`${book.pages}`)
    p2.appendChild(strong2);
    p2.appendChild(pages);
    card.appendChild(p2);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'button-group';

    const statusBtn = document.createElement('button');
    statusBtn.className = book.status ? 'action-btn success' : 'action-btn';
    statusBtn.textContent = book.status ? 'Read': 'Not Read';
    statusBtn.addEventListener('click', () => {
        const id = book.id;
        book.status = !book.status;
        updateLocalStorage(id!);
        statusBtn.textContent = book.status ? 'Read': 'Not Read';
        statusBtn.className = book.status ? 'action-btn success' : 'action-btn';
    })
    buttonsContainer.appendChild(statusBtn);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'action-btn danger';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        const id = book.id;
        deleteFromStorage(id!);
        const bookCard = document.getElementById(`${id}`);
        bookCard?.remove();
    })

    buttonsContainer.appendChild(removeBtn);
    card.appendChild(buttonsContainer);

    cardContainer?.appendChild(card);
}