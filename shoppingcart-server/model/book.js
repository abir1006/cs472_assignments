let books = [
    {
        id: 1,
        title: 'Laughter is the Best Medicine',
        isbn: '222-223-333',
        publishedDate: '11/11/1999',
        author: "Reader's Digest"
    },
    {
        id: 2,
        title: 'The Rescue',
        isbn: '222-223-443',
        publishedDate: '11/11/2000',
        author: "Nicholas Sparks"
    }
];
let idCounter = 3;

module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll() {
        return books;
    }

    static getBookById(id) {
        const book = books.find(book => book.id === id);
        if (book) {
            return book;
        } else {
            throw new Error(`Book not found with Id: ${id}`);
        }
    }

    save() {
        this.id = idCounter++;
        books.push(this);
        return this.id; // Return the assigned ID
    }

    static deleteById(id) {
        const index = books.findIndex(book => book.id === id);
        if (index > -1) {
            return books.splice(index, 1)[0];
        } else {
            throw new Error(`Book not found with Id: ${id}`);
        }
    }

    update() {
        const index = books.findIndex(book => book.id === this.id);
        if (index > -1) {
            books[index] = this;
        } else {
            throw new Error(`Book not found with Id: ${this.id}`);
        }
    }
}