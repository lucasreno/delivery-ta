import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Carrinho } from '../carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  carrinho: Carrinho[] = [];
  totalCarrinho: number = 0;

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  async iniciarBanco() {
    this.storage.create();
    this.carrinho = await this.storage.get('carrinho') ?? [];
    this.totalCarrinho = 0;
    this.carrinho.forEach(c => {
      this.totalCarrinho += c.quantidade * c.produto.valor;
    });
  }

  ionViewWillEnter() {
    this.iniciarBanco();
  }

  remover(indice) {
    this.carrinho.splice(indice, 1);
    this.storage.set('carrinho', this.carrinho);
    
    if (this.carrinho.length == 0)
      this.router.navigateByUrl('/');

    this.totalCarrinho = 0;
    this.carrinho.forEach(c => {
      this.totalCarrinho += c.quantidade * c.produto.valor;
    });
  }
}
