import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RootObjectPosts,Post2,Next } from "../../interfaces/posts.interface";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts: Post2[] = [];
  next: Next;
  constructor(private data: DataService) { 
    this.GetPosts();

  }

  ngOnInit() {

  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
      console.log(this.next)
    //  this.getInfo()
      this.GetPostsNext(this.next.query_params.page_number);
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
  GetPostsNext(valor: string) {
    this.data.getPostsNext(valor).subscribe(res => {
      this.posts.push(...res.response.posts)
      console.log(res.response.posts)
      console.log("Funciona")

      //   this.valor = res.response.blog.name;
      // this.url = res.response.blog.avatar[2].url;
    }
    );
  }
}
