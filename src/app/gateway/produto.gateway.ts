import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProdutoModel } from "../model/produto.model";
import { Observable, firstValueFrom } from "rxjs";

@Injectable()
export class ProdutoGateway {

    constructor(private httpClient: HttpClient) {

    }

    async getProdutos(): Promise<ProdutoModel[]> {

        const headers = new HttpHeaders({
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJyb25zemNrYUBnbWFpbC5jb20iLCJpYXQiOjE2OTY1NTIzNTgsImV4cCI6MTY5NjYzODc1OH0.-dt0Om5rsgsVCeg20WgzGL1klA-8Mn8AxxPM5FVJ2f8ETVVFgRtnaVnPDwNdA-Mz",
        });

        const observable: Observable<ProdutoModel[]> = this.httpClient.get<ProdutoModel[]>("http://localhost:8081/produtos", {
            headers
        });

        const data = await firstValueFrom<ProdutoModel[]>(observable);

        return data;

    }

}