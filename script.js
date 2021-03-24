const cardsGrid = document.querySelector(".cards");
const openModal = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const submitModal = document.querySelector(".modal__submit");
const modalForm = document.querySelector(".book-form");
let deleteCard = document.querySelectorAll(".card__delete");
let userTitle = document.querySelector(".book-title");
let userAuthor = document.querySelector(".book-author");
let userCategory = document.querySelector(".book-category");
let userStatus = document.querySelector(".book__status");

openModal.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

submitModal.onclick = function(e) {
    event.preventDefault();
    for (let i = 0; i < library.length; i++) {
        if (library[i].title == userTitle.value) {
            alert("This book already exists in your library!");
            return;
        }
    }
    if (userStatus.checked == false) {
        addBook(userTitle.value, userAuthor.value, userCategory.value, false);
    } else {
        addBook(userTitle.value, userAuthor.value, userCategory.value, true);
    }
    modal.style.display = "none";
    modalForm.reset();
    clearGrid();
    restoreLocal();
}

let library = [];

function Book (title, author, category, read) {
    this.title = title
    this.author = author
    this.category = category
    this.read = read
}

function addBook (bookTitle, bookAuthor, bookCategory, bookCondition) {
    let newBook = new Book (bookTitle, bookAuthor, bookCategory, bookCondition);
    library.push(newBook);
    saveLocal();
}

function generateBooks(library) {
    for (let i = 0; i < library.length; i++) {
    if (library[i].read == false) {
        cardsGrid.innerHTML += `
        <div class="card">
            <h2 class="card__header">Title:</h2>
            <p class="card__input">${library[i].title}</p>
            <h2 class="card__header">Author:</h2>
            <p class="card__input">${library[i].author}</p>
            <h2 class="card__header">Category:</h2>
            <p class="card__input">${library[i].category}</p>
            <p class="card__header">Mark as read:</p>
            <label class="switch">
                <input type="checkbox" onclick="toggleStatus(this)" id="book-status" class="book__condition">
                <span class="slider round"></span>
            </label>
            <button onclick="removeFromLibrary(this);" class="card__delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
        </div>
    `
    } else {
        cardsGrid.innerHTML += `
        <div class="card">
            <h2 class="card__header">Title:</h2>
            <p class="card__input">${library[i].title}</p>
            <h2 class="card__header">Author:</h2>
            <p class="card__input">${library[i].author}</p>
            <h2 class="card__header">Category:</h2>
            <p class="card__input">${library[i].category}</p>
            <p class="card__header">Mark as read:</p>
            <label class="switch">
                <input type="checkbox" onclick="toggleStatus(this)" id="book-status" class="book__condition" checked>
                <span class="slider round"></span>
            </label>
            <button onclick="removeFromLibrary(this);" class="card__delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
        </div>
    `
    }
}}

function addToGrid (book) {
    if (userStatus.checked == false) {
        cardsGrid.innerHTML += `
        <div class="card">
            <h2 class="card__header">Title:</h2>
            <p class="card__input">${library[library.length -1].title}</p>
            <h2 class="card__header">Author:</h2>
            <p class="card__input">${library[library.length -1].author}</p>
            <h2 class="card__header">Category:</h2>
            <p class="card__input">${library[library.length -1].category}</p>
            <p class="card__header">Mark as read:</p>
            <label class="switch">
                <input type="checkbox" onclick="toggleStatus(this)" id="book-status" class="book__condition">
                <span class="slider round"></span>
            </label>
            <button onclick="removeFromLibrary(this);" class="card__delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
        </div>
    `
    } else {
        cardsGrid.innerHTML += `
        <div class="card">
            <h2 class="card__header">Title:</h2>
            <p class="card__input">${library[library.length -1].title}</p>
            <h2 class="card__header">Author:</h2>
            <p class="card__input">${library[library.length -1].author}</p>
            <h2 class="card__header">Category:</h2>
            <p class="card__input">${library[library.length -1].category}</p>
            <p class="card__header">Mark as read:</p>
            <label class="switch">
                <input type="checkbox" onclick="toggleStatus(this)" id="book-status" class="book__condition" checked>
                <span class="slider round"></span>
            </label>
            <button onclick="removeFromLibrary(this);" class="card__delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
        </div>
    `
    }
}

function removeFromLibrary(card) {
    library = library.filter((book) => book.title !==  card.parentElement.children[1].textContent);
    card.parentElement.remove();
    saveLocal();
}

function toggleStatus(card) {
    for (let i = 0; i < library.length; i++) {
        if (card.parentElement.parentElement.children[1].textContent == library[i].title) {
            if (!library[i].read) {
                library[i].read = true;
                card.checked = true;
                saveLocal();
            } else {
                library[i].read = false;
                card.checked = false;
                saveLocal();
            }
        }
    }
}

function clearGrid() {
    cardsGrid.innerHTML = "";
}

function saveLocal() {
    localStorage.setItem("library", JSON.stringify(library));
}

function restoreLocal() {
    library = JSON.parse(localStorage.getItem("library"));
    if (library == null) library = [];
    generateBooks(library);
}

restoreLocal();