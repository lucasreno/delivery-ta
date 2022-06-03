import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Categoria } from '../categoria';
import { Produto } from '../produto';
import { ProdutoEscolhidoService } from '../service/produto-escolhido.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  BASE_URL = 'http://lucasreno.kinghost.net/delivery';
  categorias: Categoria[] = [];

  constructor(
    private http: HttpClient, 
    private pe: ProdutoEscolhidoService
  ) {
    this.pegarDados();
  }
  
  salvarProduto(p: Produto){
    this.pe.produto = p;
  }

  pegarDados(){
    this.http.get<Categoria[]>(this.BASE_URL+'/categorias').subscribe(
      resposta => {
        this.categorias = resposta;
        this.categorias.forEach(cat => {
          this.http.get<Produto[]>(this.BASE_URL+'/produtos/'+cat.idCategoria).subscribe(
            resp => {
              cat.produtos = resp;
            }
          );
        });
      }
    );
  }
}
