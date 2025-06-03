const modal = document.querySelector("#modal");
const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector(".close");

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const statusInput = document.querySelector('#status');
const submitBtn = document.querySelector('#submitBtn');

const bookArray = [];

function Book(id, title, author, pages, status) {

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
