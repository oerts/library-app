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

}

function generateBooks(library) {
    for (let i = 0; i < library.length; i++) {
        
    }
}