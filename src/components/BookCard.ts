import type { Book } from "../classes/Book"

export const BookCard = (book: Book) => {
    const cardContainer = document.querySelector('.card-wrapper');
    const card = document.createElement('div');
    card.className = 'card';

    const h3 = document.createElement('h3');
    const i = document.createElement('i');
    i.className = 'fa-solid fa-bookmark';
    h3.appendChild(i);
    h3.textContent = 'Book title';
    card.appendChild(h3);

    const p1 = document.createElement('p');
    const strong1 = document.createElement('strong');
    strong1.textContent = 'Author';
    p1.textContent = 'John Doe';
    p1.appendChild(strong1);
    card.appendChild(p1);

    const p2 = document.createElement('p');
    const strong2 = document.createElement('strong');
    strong2.textContent = 'Pages';
    p2.textContent = '100';
    p2.appendChild(strong2);
    card.appendChild(p2);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'button-group';

    const statusBtn = document.createElement('button');
    statusBtn.className = 'action-btn success';
    statusBtn.textContent = 'Read';
    buttonsContainer.appendChild(statusBtn);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'action-btn danger';
    removeBtn.textContent = 'Remove';
    buttonsContainer.appendChild(removeBtn);
    card.appendChild(buttonsContainer);

    cardContainer?.appendChild(card);
}