const modal = document.querySelector("#modal");
const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector(".close");

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
