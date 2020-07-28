import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { ComponentsModule } from '../components/components.module';
//import { Routes,RouterModule } from "@angular/router";

// const route:Routes=[
//   {path:'',component:HomePage,children:}
// ]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    HomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
