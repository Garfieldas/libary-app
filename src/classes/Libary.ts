export class Libary {
    private books: string;

    constructor() {
        this.books = localStorage.getItem('books') ?? '[]';
    }

    getAllBooks() {
        return JSON.parse(this.books);
    }

    addBook(book: any) {
        const books = this.getAllBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books))
    }
}