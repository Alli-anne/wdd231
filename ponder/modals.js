const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal"); // Assume you have a button to open the modal
const closeModalButton = document.querySelector(".close-button");

function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", false);
}

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", true);
}
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

function keydownHandler(event) {
    if (event.key === "Escape") {
        closeModal();
    }
};
document.addEventListener("keydown", keydownHandler);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
