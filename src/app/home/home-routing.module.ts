import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'posts',
        loadChildren: () => import('../pages/posts/posts.module').then(m => m.PostsPageModule)
      },
      {
        path: 'likes',
        loadChildren: () => import('../pages/likes/likes.module').then(m => m.LikesPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../pages/info/info.module').then(m => m.InfoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
