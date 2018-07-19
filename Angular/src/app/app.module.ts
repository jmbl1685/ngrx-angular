import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductTypeComponent } from '../components/product-type/product-type.component';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppReducer } from './app-ngrx/reducers/app.reducers';
import { environment } from '../environments/environment';
import { AppService } from './app-ngrx/services/app.services';
import { HttpClientModule } from '@angular/common/http';
import { AppEffects } from './app-ngrx/effects/app.effects';
import { EffectsModule } from '@ngrx/effects';

const store = {
  store: AppReducer
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
    HttpClientModule,
    [StoreModule.forRoot(store)],
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
