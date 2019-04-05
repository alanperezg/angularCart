import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'productos/:id', component: ProductosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'carrito', component: ProductosComponent},
  {path: 'carrito/:id', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
