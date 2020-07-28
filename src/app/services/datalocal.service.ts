import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  valor:boolean;
  constructor(private storage: Storage) {this.cargartema();}
  guardartema(dark:boolean){
this.valor=dark;
    this.storage.set('dark', this.valor);
  }
  async cargartema(){
  const darkvalor=await this.storage.get('dark');   
  this.valor=darkvalor;
  }
  
}
