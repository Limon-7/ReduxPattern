import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RootReducer } from './reducer/root.reducer';
import { SimpleReducer } from './reducer/simple.reducer';
import { PostReducer } from './reducer/post.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ message: SimpleReducer, post: PostReducer, root: RootReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
