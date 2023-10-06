import { Injectable } from "@angular/core";
import { PedidoModel } from "../model/pedido.model";
import { PedidoItemModel } from "../model/pedidoitem.model";
import { ProdutoModel } from "../model/produto.model";

@Injectable()
export class PedidoService {

    public pedido: PedidoModel = new PedidoModel();

    adicionarItem(produto: ProdutoModel): void {
        const item: PedidoItemModel | undefined = this.pedido.itens.find(item => item.produto.id === produto.id);
        if (item) {
            item.quantidade++;
        } else {
            this.pedido.itens.push(new PedidoItemModel(produto, 1));
        }
        this.pedido.total += produto.preco;
        console.log(this.pedido);
        console.log(this.pedido.total);
    }

    removerItem(produto: ProdutoModel): void {
        const item: PedidoItemModel | undefined = this.pedido.itens.find(item => item.produto.id === produto.id);
        if (item) {
            item.quantidade--;
            this.pedido.total -= produto.preco;
            if (item.quantidade === 0) {
                this.pedido.itens.splice(this.pedido.itens.indexOf(item), 1);
            }
        }
        console.log(this.pedido);
        console.log(this.pedido.total);
    }

}