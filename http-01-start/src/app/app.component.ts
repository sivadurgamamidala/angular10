import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts:Post[] = [];
  isFetching = false;
  error = null;
  private errorSub : Subscription;

  constructor(private http: HttpClient, private postService:PostsService) {}

  ngOnInit() {
    // this.fetchPosts();
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    },
    error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    }
    );
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData);
    // this.http.post<{name: string}>('https://http-01start-default-rtdb.firebaseio.com/posts.json',
    // postData)
    //   .subscribe(ResponseData => {
    //     console.log(ResponseData);
    //   })
    // calling from post service
    this.postService.createAndStorePost(postData.title,postData.content);
  }

  onFetchPosts() {
    // Send Http request
    // this.fetchPosts();
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, 
    error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }

  onHandleError() {
    this.error = null;
  }

  // private fetchPosts() {
  //   this.isFetching = true;
  //   // this.http
  //   // .get<{[key: string]: Post}>('https://http-01start-default-rtdb.firebaseio.com/posts.json')
  //   // .pipe(map(responseData => {
  //   //   const postsArray: Post[] = [];
  //   //   for (const key in responseData) {
  //   //     if( responseData.hasOwnProperty(key)) {
  //   //       postsArray.push({...responseData[key], id: key})
  //   //     }
  //   //   }
  //   //   return postsArray;
  //   // }))
  //   // .subscribe(posts => {
  //   //   // console.log(posts);
  //   //   this.isFetching = false;
  //   //   this.loadedPosts = posts;
  //   // });
  // }

  ngOnDestroy () {
    this.errorSub.unsubscribe();
  }
}
