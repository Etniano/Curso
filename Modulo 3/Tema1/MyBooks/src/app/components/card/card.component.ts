import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() libro!: Book;
  @Input() index!: number;

  @Output() eliminar = new EventEmitter<number>();

  eliminarLibro(): void {
  this.eliminar.emit(this.libro.id_book);
}
}
