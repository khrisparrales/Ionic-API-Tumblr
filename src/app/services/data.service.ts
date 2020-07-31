import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RespuestaTop } from '../interfaces/data.interface';
import { RootObjectlikes,Links } from "../interfaces/likes.interface";
import { RootObjectFollowing } from "../interfaces/following.interface";
import { RootObjectPosts } from "../interfaces/posts.interface";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  usuario=environment.usuario;
  apikey=environment.apikey;
  private baseUrl = 'https://api.tumblr.com/v2/';
  valor:RespuestaTop[]=[];
  constructor(private http: HttpClient) { }
/**
 * cargar 

  /**
 * getinfo
 */
  public getinfo() {
    return this.http.get<RespuestaTop>(this.baseUrl + 'blog/'+this.usuario+'.tumblr.com/info?api_key='+this.apikey);
  }
  /**
   * getlikes
   */
  public getlikes() {
    return this.http.get<RootObjectlikes>(this.baseUrl + 'blog/' + this.usuario +'.tumblr.com/likes?api_key='+this.apikey)
  }
  public getlikesNext(url:string) {
    return this.http.get<RootObjectlikes>(this.baseUrl+"blog/"+this.usuario+".tumblr.com/likes?api_key="+this.apikey+"&before=" +url)
  }
/**
 * getPosts
 */
public getPosts() {
  return this.http.get<RootObjectPosts>(this.baseUrl + 'blog/' + this.usuario +'.tumblr.com/posts/photo?api_key='+this.apikey);
}
  public getPostsNext(url:string,offset:string) {
    return this.http.get<RootObjectPosts>(this.baseUrl + 'blog/' + this.usuario + '.tumblr.com/posts/photo?api_key=' + this.apikey +'&type=photo&offset='+offset+'&page_number=' + url +'%22');
  }
  /**
   * getfollowing
   */
   params = new HttpParams()
    .append("Authorization", "OAuth oauth_consumer_key=\"uZ4WebL05Rq54HIep8GGeFeHBJ\",oauth_token=\"rrt0TZi7tVpjehLwufLCYoS7nccBFWQZU\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1595634614\",oauth_nonce=\"k7ehafq0wOK\",oauth_version=\"1.0\",oauth_signature=\"RZkfATeWsq7f8MZGMSFb3c%3D\"")
    .append('jsonp', 'JSONP_CALLBACK');
   public getfollowing() {

     return this.http.get<RootObjectFollowing>(this.baseUrl + 'blog/' + this.usuario +'.tumblr.com/following')
    
  }
}
