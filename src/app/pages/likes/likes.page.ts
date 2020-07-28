import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import { Likedpost, Next } from "../../interfaces/likes.interface";
@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {
  posts: Likedpost[] = [];
  next: Next;
  valor = "Khris";
  text = "<h1>qqqqqqqqqq</h1>";
  url = "";
  constructor(private data: DataService) {
    this.getInfo()
    this.getLikes();
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
      this.getInfo()
      this.getLikesNext(this.next.query_params.before);
    }, 3000);
  }
  //"/v2/blog/khrisparrales.tumblr.com/likes?before=1595221061"
  getInfo() {
    this.data.getinfo().subscribe(res => {
      console.log(res)
      console.log(res.response.blog)
      this.valor = res.response.blog.name;
      this.url = res.response.blog.avatar[2].url;
    });
  }
  getLikes() {
    this.data.getlikes().subscribe(res => {
      console.log(res.response)
      //this.posts=res.response.liked_posts;
      // res.response.liked_posts[0].type
      this.posts.push(...res.response.liked_posts);
      this.next = res.response._links.next;
    });
  }
  getLikesNext(valor: string) {
    this.data.getlikesNext(valor).subscribe(res => {
      console.log(res.response)
      //this.posts=res.response.liked_posts;
      // res.response.liked_posts[0].type
      this.posts.push(...res.response.liked_posts);
      this.next = res.response._links.next;
    });
  }

  ngOnInit() {
  }

}
