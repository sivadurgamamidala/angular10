import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    error = new Subject<string>();
    constructor(private http:HttpClient) {}

    createAndStorePost(title:string, content:string) {
        const postData: Post = {title: title, content: content};
        this.http.post<{name: string}>('https://http-01start-default-rtdb.firebaseio.com/posts.json',postData)
            .subscribe(
                ResponseData => {
                    console.log(ResponseData);
                }, 
                error => {
                    this.error.next(error.message);
                }
            )
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print','pretty');
        searchParams = searchParams.append('Custom','key');
        return   this.http
            .get<{[key: string]: Post}>('https://http-01start-default-rtdb.firebaseio.com/posts.json',{
                headers : new HttpHeaders({'Custom-header':'Hello'}),
                // params : new HttpParams().set('print','pretty')
                params : searchParams
            })
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if( responseData.hasOwnProperty(key)) {
                             postsArray.push({...responseData[key], id: key})
                        }
                    }
                    return postsArray;
                }
            ),
            catchError(errorRes => {
                //send to analytics server
                return throwError(errorRes);
            })
        );
    }
    deletePosts() {
        return this.http.delete('https://http-01start-default-rtdb.firebaseio.com/posts.json');
    }
}