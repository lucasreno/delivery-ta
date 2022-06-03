import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoEscolhidoService } from '../service/produto-escolhido.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {
  produto: Produto;
  constructor(private pe: ProdutoEscolhidoService) {
    this.produto = pe.produto;
  }

  ngOnInit() {
  }

}
