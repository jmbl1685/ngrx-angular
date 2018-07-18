import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Store } from '@ngrx/store';
import { AppStore } from './app-ngrx/reducers/app.reduce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public productList: Array<Product> = [];

  constructor(
    private store: Store<AppStore>
  ) {

  }

  ngOnInit() {
    this.store.subscribe(res => console.log(res))
  }

}
