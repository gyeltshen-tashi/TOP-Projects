const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;    
    this.id = crypto.randomUUID();
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

const addBookButton = document.querySelector("#newform");

addBookButton.addEventListener('click', () => {
    document.querySelector("#dialog").showModal();
});

function displayBooks() {
    const container = document.querySelector("#library");
    container.innerHTML="";
    
    myLibrary.forEach(book=> {
        const card = document.createElement("div");
        card.setAttribute("data-id", book.id);
        card.textContent = `${book.title} by ${book.author}`

        const readButton = document.createElement("button");
        readButton.textContent = book.read ? "Mark as not Read" : "Mark as Read";

        readButton.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        })

        const delButton = document.createElement("button");
        delButton.textContent = `Delete`;

        delButton.addEventListener("click", () => {
            const index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
            displayBooks();
        })

        card.appendChild(readButton);
        card.appendChild(delButton);
        container.appendChild(card);
    });
};

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    if (!title || !author) {
        alert("Please enter title and author");
        return;
    }
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    displayBooks();
    form.reset();
    document.querySelector("#dialog").close();
});

