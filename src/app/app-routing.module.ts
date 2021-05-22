import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoDeComprasComponent } from './components/carrito-de-compras/carrito-de-compras.component';
import { CompraExitosaComponent } from './components/compra-exitosa/compra-exitosa.component';
import { HomeComponent } from './components/home/home.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { ProductosComponent } from './components/productos/productos.component';

let routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'carrito-de-compras', component: CarritoDeComprasComponent},
  { path: 'pagos', component: PagosComponent},
  { path: 'compra-exitosa', component: CompraExitosaComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
