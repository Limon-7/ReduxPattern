import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FRENCH, SPANISH } from './actions/root.action';
import { Observable } from 'rxjs';
import { PostModel } from './models/post.model';
import * as PostActions from './actions/root.action';
import { Root } from './models/root.model';

export interface AppState {
  message: string;
  post: PostModel;
  root: Root;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reduxFire';
  count$: Observable<Root>;
  message: Observable<string>;
  post$: Observable<PostModel>;
  text: string;
  constructor(private store: Store<AppState>) {
    this.message = this.store.select('message');
    this.post$ = this.store.select('post');
    this.count$ = this.store.select('root');
  }
  spanishMessage() {
    this.store.dispatch({ type: SPANISH });
  }

  frenchMessage() {
    this.store.dispatch({ type: FRENCH });
  }
  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }
  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
  increment() {
    this.store.dispatch(new PostActions.Increment());
  }
}
