import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "pedidos", component: PedidoComponent },
  { path: "produtos", component: ProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
