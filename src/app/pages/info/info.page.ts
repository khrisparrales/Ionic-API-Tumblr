import { Component, OnInit } from '@angular/core';
import { RespuestaTop,Blog,Avatar } from "../../interfaces/data.interface";
import { DataService } from "../../services/data.service";
import { RootObjectPosts, Post2, Next } from "../../interfaces/posts.interface";

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  info: Blog[] = [];
  posts: Post2[] = [];
  avatar: Avatar[] ;
  next: Next;
  constructor(private data:DataService) { 
    this.GetPosts();
this.GetInfo();
  }
  GetInfo(){
    this.data.getinfo().subscribe(res => {
      this.info.push(res.response.blog);
      this.avatar = res.response.blog.avatar;
      console.log(res.response.blog)
      console.log("Funciona")
      //   this.next = res.response._links.next;
      //   this.valor = res.response.blog.name;
      // this.url = res.response.blog.avatar[2].url;
    }
    );
  }
  GetPostsNext(valor: string,valor2:string) {
    this.data.getPostsNext(valor,valor2).subscribe(res => {
      this.posts.push(...res.response.posts)
      console.log(res.response.posts)
      console.log("Funciona")
      this.next = res.response._links.next;
      //   this.valor = res.response.blog.name;
      // this.url = res.response.blog.avatar[2].url;
    }
    );
  }
  loadData(event) {
    setTimeout(() => {

      console.log(this.next)
      //  this.getInfo()
      this.GetPostsNext(this.next.query_params.page_number, this.next.query_params.offset);
      event.target.complete();
    }, 3000);
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
      console.log(this.next)
      //  this.getInfo()
      this.GetPostsNext(this.next.query_params.page_number, this.next.query_params.offset);
    }, 3000);
  }
  GetPosts() {
    this.data.getPosts().subscribe(res => {
      this.posts.push(...res.response.posts)
      console.log(res.response.posts)
      console.log("Funciona")
      this.next = res.response._links.next;
      //   this.valor = res.response.blog.name;
      // this.url = res.response.blog.avatar[2].url;
    }
    );
  }
  ngOnInit() {


  }

}
