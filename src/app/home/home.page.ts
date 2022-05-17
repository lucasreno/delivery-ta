import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  BASE_URL = 'http://lucasreno.kinghost.net/delivery';
  categorias: Categoria[] = [];

  constructor(private http: HttpClient) {
    this.pegarDados();
  }
  
  pegarDados(){
    this.http.get<Categoria[]>(this.BASE_URL+'/categorias').subscribe(
      resposta => {
        this.categorias = resposta;
      }
    );
  }
}
