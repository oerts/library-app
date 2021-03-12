let library = [];

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBook (bookTitle, bookAuthor, bookPages, bookCondition) {
    let newBook = new Book (bookTitle, bookAuthor, bookPages, bookCondition);
    library.push(newBook);
}