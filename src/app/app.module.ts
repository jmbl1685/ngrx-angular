import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductTypeComponent } from '../components/product-type/product-type.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppReducer } from './app-ngrx/app.reducers';
import { environment } from '../environments/environment';

const store = {
  product: AppReducer
}

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductTypeComponent
  ],
  imports: [
    BrowserModule,
    [StoreModule.forRoot(store)],
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
