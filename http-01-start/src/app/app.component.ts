import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService:PostsService) {}

  ngOnInit() {
    // this.fetchPosts();
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
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
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
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
}
