import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../models/book.model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books = store.select('book') // defined in StoreModule.forRoot({}) in app.Modules
  }

  ngOnInit() {
  }

}
