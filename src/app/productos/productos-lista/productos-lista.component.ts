import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { Subscription } from 'rxjs';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {
  
  constructor(private productosService: ProductosService, private router: Router) { }
  productos: Producto[];
  listTitle: String;
  componentMode = 1;
  ngOnInit() {
    if (this.router.url === '/productos') {
      this.componentMode = 1;
      this.productos = this.productosService.getProductos();
      this.listTitle = 'Lista de productos';
    } else if (this.router.url === '/carrito') {
      this.componentMode = 2;
      this.productos = this.productosService.getCarrito();
      this.listTitle = 'Carrito de compras';
    }
  }
}
