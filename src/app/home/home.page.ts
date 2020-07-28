import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Likedpost,Next } from "../interfaces/likes.interface";
import { DatalocalService } from "../services/datalocal.service";
import { RespuestaTop,Blog } from "../interfaces/data.interface";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts:Likedpost[]=[];
  info: Blog[] = [];
  next:Next;
   prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  darkMode: boolean = this.prefersDark.matches;
  valor = "";
  text = "<h1>qqqqqqqqqq</h1>";
  url = "";
  constructor(public data: DataService,public datalocal:DatalocalService) { 
this.getInfo();
  //  this.valor=this.info.
  }

  cambio() { 
   this.darkMode = !this.darkMode;
     this.datalocal.guardartema(this.darkMode);
      document.body.classList.toggle('dark');
   

  }


//"/v2/blog/khrisparrales.tumblr.com/likes?before=1595221061"

  getInfo(){
    this.data.getinfo().subscribe(res=>{
console.log(res)
this.info.push( res.response.blog);
      this.valor = res.response.blog.name;
      this.url = res.response.blog.avatar[2].url;
    });
  }
  onClick(){
    this.getInfo();
  }
  getLikes(){
    this.data.getlikes().subscribe(res=>{
      console.log(res.response)
      //this.posts=res.response.liked_posts;
     // res.response.liked_posts[0].type
     this.posts.push(...res.response.liked_posts);
this.next=res.response._links.next;
    });
  }
  getLikesNext(valor:string) {
    this.data.getlikesNext(valor).subscribe(res => {
      console.log(res.response)
      //this.posts=res.response.liked_posts;
      // res.response.liked_posts[0].type
      this.posts.push(...res.response.liked_posts);
      this.next = res.response._links.next;
    });
  }
}
