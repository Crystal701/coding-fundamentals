class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        return this.books.push(book);
    }

    getBooks() {
        const arr = [];

        for (let i of this.books) {
            arr.push(i.name);
        }

        return arr;
    }

    getBooksByCategory(bookName) {
        const arr = [];
        const filtered = this.books.filter(book => book.category === bookName);

        for (let i of filtered) {
            arr.push(i.name);
        }

        return arr;
    }
}

class Book {
    constructor(name, author, category) {
        this.name = name;
        this.author = author;
        this.category = category;
    }
}

const library = new Library('ABC')

const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')
const bookB = new Book('Book B', 'Mr. A', 'Sci-Fi')
const bookC = new Book('Book C', 'Mr. B', 'Horror')

library.addBook(bookA)
library.addBook(bookB)
library.addBook(bookC)

const allBooks = library.getBooks();
const horrorBooks = library.getBooksByCategory('Horror');


console.log(allBooks) // ['Book A', 'Book B', 'Book C']
console.log(horrorBooks) // ['Book C']