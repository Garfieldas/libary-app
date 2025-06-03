const modal = document.querySelector("#modal");
const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector(".close");

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const statusInput = document.querySelector('#status');
const submitBtn = document.querySelector('#submitBtn');

const bookArray = [];

function Book(title, author, pages, status) {

  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;

}

const openModal = () => {
  modal.showModal();
};

const closeModal = () => {
  modal.close();
};

const addBook = () => {

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const status = statusInput.checked

  if (!title |
    !author |
    !pages) {
    return;
  }
  const book = new Book(
    title,
    author,
    pages,
    status
  )
  return book;

}

const clearInputs = () => {

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  statusInput.checked = false;

}

const renderBook = (book) => {
  
  const container = document.querySelector('.content');
  const card = document.createElement('div');
  card.className = 'book-card';
  card.setAttribute('id', book.id);
  container.appendChild(card);

  const fields = ['author', 'title', 'pages'];

  fields.forEach(key => {
    const p = document.createElement('p');
    p.textContent = `${book[key]}`
    card.appendChild(p)
  })

  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'button-group';
  card.appendChild(buttonDiv);

  const statusBtn = document.createElement('button');
  statusBtn.className = book.status ? 'button-read' : 'button-unread';
  statusBtn.textContent = book.status ? 'read' : 'unread';
  buttonDiv.appendChild(statusBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'button';
  deleteBtn.textContent = 'Delete';
  buttonDiv.appendChild(deleteBtn);

}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openModal();
});

closeBtn.addEventListener("click", () => {
  closeModal();
});

modal.addEventListener("click", (e) => {
  const rect = modal.getBoundingClientRect();
  const isInModel =
    rect.top <= e.clientY &&
    e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX &&
    e.clientX <= rect.left + rect.width;

  if (!isInModel) {
    closeModal();
  }
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = addBook();
  if (!book) {
    alert('Add missing fields')
    return;
  }
  bookArray.push(book);
  closeModal();
  clearInputs();
  renderBook(book);
})
