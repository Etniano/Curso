import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../../shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  nuevoLibro: Book = new Book('', '', 0, '');

  constructor(private booksService: BooksService, private router: Router) {}

  agregarLibro(): void {
    const libro = new Book(
      this.nuevoLibro.title,
      this.nuevoLibro.author,
      this.nuevoLibro.price,
      this.nuevoLibro.photo,
      Math.floor(Math.random() * 100000),
      1
    );
    this.booksService.add(libro);
    this.nuevoLibro = new Book('', '', 0, '');
    this.router.navigate(['/books']);
  }
}
