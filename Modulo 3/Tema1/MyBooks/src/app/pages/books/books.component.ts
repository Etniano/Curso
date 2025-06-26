import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }

  eliminarLibro(id: number): void {
    const eliminado = this.booksService.delete(id);
    if (eliminado) {
      this.books = this.booksService.getAll(); 
    }
  }
}