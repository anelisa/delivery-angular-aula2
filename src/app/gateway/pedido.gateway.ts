import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PedidoModel } from "../model/pedido.model";
import { Observable, firstValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

interface Item {
    produto: number
    quantidade: number
}

interface PedidoItens {
    itens: Item[]
}
@Injectable()
export class PedidoGateway {
    constructor(private httpClient: HttpClient) {
    }

    async criarPedido(itensPedido: PedidoItens): Promise<PedidoItens>{
        const headers = new HttpHeaders({
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJyb25zemNrYUBnbWFpbC5jb20iLCJpYXQiOjE2OTY1NTIzNTgsImV4cCI6MTY5NjYzODc1OH0.-dt0Om5rsgsVCeg20WgzGL1klA-8Mn8AxxPM5FVJ2f8ETVVFgRtnaVnPDwNdA-Mz",
        });

        const observable: Observable<PedidoItens> = this.httpClient.post<PedidoItens>("http://localhost:8081/pedidos", itensPedido, {
            headers,
        }); 

        const data = await firstValueFrom<PedidoItens>(observable);

        return data
    }
}