import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
import { AppService } from '../services/app.services';


import {
    ActionsType,
    ShoppingCartProducts,
    HelloWorld,
    HelloWorldSuccess,
    HelloWorldError
} from "../actions/app.actions";

@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private appService: AppService
    ) { }

    @Effect()
    HelloWorld$: Observable<Action> = this.actions$.pipe(
        ofType<HelloWorld>(ActionsType.HELLO_WORLD),
        concatMap(action =>
            this.appService
                .HelloWorld()
                .pipe(
                    map(data => new HelloWorldSuccess()),
                    catchError(error => of(new HelloWorldError()))
                )
        )
    );



}