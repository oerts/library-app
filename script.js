const cardsGrid = document.querySelector(".cards");
const openModal = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const submitModal = document.querySelector(".modal__submit");
let deleteCard = document.querySelectorAll(".card__delete");
let userTitle = document.querySelector(".book-title")
let userAuthor = document.querySelector(".book-author")
let userCategory = document.querySelector(".book-category")
let userStatus = document.querySelector(".book__status")

deleteCard.forEach(btn => {
    btn.onclick = function() {
      console.log("hey there");
    }
})

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
    addBook(userTitle.value, userAuthor.value, userCategory.value, userStatus.options[userStatus.selectedIndex].text);
    modal.style.display = "none";
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
    addToGrid(library[library.length -1]);
}

function generateBooks(library) {
    for (let i = 0; i < library.length; i++) {
        cardsGrid.innerHTML += `
        <div class="card" data-card="${i}">
        <h2 class="card__header">Title:</h2>
        <p class="card__input">${library[i].title}</p>
        <h2 class="card__header">Author:</h2>
        <p class="card__input">${library[i].author}</p>
        <h2 class="card__header">Category:</h2>
        <p class="card__input">${library[i].category}</p>
        <h2 class="card__header">Status:</h2>
        <p class="card__input">${library[i].read}</p>
        <button class="card__delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
        </div>
    `
    }
}

function addToGrid (book) {
    cardsGrid.innerHTML += `
    <div class="card" data-card="${library.length -1}">
    <h2 class="card__header">Title:</h2>
    <p class="card__input">${library[library.length -1].title}</p>
    <h2 class="card__header">Author:</h2>
    <p class="card__input">${library[library.length -1].author}</p>
    <h2 class="card__header">Category:</h2>
    <p class="card__input">${library[library.length -1].category}</p>
    <h2 class="card__header">Status:</h2>
    <p class="card__input">${library[library.length -1].read}</p>
    <button onclick="removeFromLibrary(this);" class="card__delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
    </div>
`
}

function removeFromLibrary(card) {
    library = library.filter((book) => book.title !==  card.parentElement.children[1].textContent);
    card.parentElement.remove();
}