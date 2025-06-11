import { Component } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [];

  nuevoLibro: Book = new Book('', '', 0, '');

  agregarLibro(): void {
    const nuevo = new Book(
      this.nuevoLibro.title,
      this.nuevoLibro.author,
      this.nuevoLibro.price,
      this.nuevoLibro.photo
    );

    this.books.push(nuevo);
    this.nuevoLibro = new Book('', '', 0, ''); // limpiar el formulario
  }
}