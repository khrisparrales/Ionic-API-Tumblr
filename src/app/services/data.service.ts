import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RespuestaTop } from '../interfaces/data.interface';
import { RootObjectlikes,Links } from "../interfaces/likes.interface";
import { RootObjectFollowing } from "../interfaces/following.interface";
import { RootObjectPosts } from "../interfaces/posts.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private baseUrl = 'https://api.tumblr.com/v2/';
  valor:RespuestaTop[]=[];
  constructor(private http: HttpClient) { }
/**
 * cargar 

  /**
 * getinfo
 */
  public getinfo() {
    return this.http.get<RespuestaTop>(this.baseUrl + 'blog/khrisparrales.tumblr.com/info?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4');
  }
  /**
   * getlikes
   */
  public getlikes() {
    return this.http.get<RootObjectlikes>(this.baseUrl +'blog/khrisparrales.tumblr.com/likes?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4')
  }
  public getlikesNext(url:string) {
    return this.http.get<RootObjectlikes>(this.baseUrl+"blog/khrisparrales.tumblr.com/likes?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&before=" +url)
  }
/**
 * getPosts
 */
public getPosts() {
  return this.http.get<RootObjectPosts>(this.baseUrl+'blog/khrisparrales.tumblr.com/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4');
}
  public getPostsNext(url:string) {
    return this.http.get<RootObjectPosts>(this.baseUrl + 'blog/khrisparrales.tumblr.com/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&type=photo&offset=20&page_number=2' + url +'%22');
  }
  /**
   * getfollowing
   */
   params = new HttpParams()
    .append("Authorization", "OAuth oauth_consumer_key=\"kqPQvSH7zN2vaGoWeDj7760EuZ4WebL05Rq54HIep8GGeFeHBJ\",oauth_token=\"rrt0TZ1xkJsd77mvijGJActi7tVpjehLwufLCYoS7nccBFWQZU\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1595634614\",oauth_nonce=\"k7ehafq0wOK\",oauth_version=\"1.0\",oauth_signature=\"RZkfATsyt2feWsq7f8MZGMSFb3c%3D\"")
    .append('jsonp', 'JSONP_CALLBACK');
   public getfollowing() {

    return this.http.get<RootObjectFollowing>(this.baseUrl + 'blog/khrisparrales.tumblr.com/following')
    
  }
}
