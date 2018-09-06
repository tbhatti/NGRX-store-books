import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as BookActions from '../actions/book.actions'
import { Book } from '../models/book.model'
import { AppState } from '../app.state'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addNewBook(name, url) {
    this.store.dispatch(new BookActions.AddBook({ name: name, url: url }))
  }

  ngOnInit() {
  }

}
