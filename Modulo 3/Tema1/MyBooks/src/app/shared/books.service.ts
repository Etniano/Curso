import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = [];

  getAll(): Book[] {
    return this.books;
  }

  add(book: Book): void {
    this.books.push(book);
  }

  delete(id_book: number): boolean {
    const index = this.books.findIndex(b => b.id_book === id_book);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
}