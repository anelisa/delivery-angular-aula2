import { Component } from '@angular/core';
import { PedidoGateway } from 'src/app/gateway/pedido.gateway';
import { PedidoModel } from 'src/app/model/pedido.model';
import { PedidoItemModel } from 'src/app/model/pedidoitem.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-itens',
  templateUrl: './pedido-itens.component.html',
  styleUrls: ['./pedido-itens.component.css']
})
export class PedidoItensComponent {

  constructor(private pedidoService: PedidoService, private pedidoGateway: PedidoGateway){
    
  }

  public pedidoFeito: PedidoModel = this.pedidoService.pedido;

  public total: number = this.pedidoFeito.total


  salvarPedido(pedidoItens: PedidoModel): void{
    console.log(pedidoItens.itens)
    const pedidoFinal = pedidoItens.itens.map(itens =>  {
      return {
        produto: itens.produto.id,
        quantidade: itens.quantidade
      }
    })
    console.log('pedido final', pedidoFinal)
    this.pedidoGateway.criarPedido({itens: pedidoFinal})
  }
}
