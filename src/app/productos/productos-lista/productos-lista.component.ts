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
  listTitle: string;
  componentMode = 1;
  selectedItems: Producto[] = [];
  totalOrden = 0;
  ngOnInit() {
    if (this.router.url === '/productos') {
      this.componentMode = 1;
      this.productos = this.productosService.getProductos();
      this.listTitle = 'Lista de productos';
    } else if (this.router.url === '/carrito') {
      this.componentMode = 2;
      this.productos = this.productosService.getCarrito();
      this.listTitle = 'Carrito de compras';
      this.productos.forEach(element => {
        this.totalOrden += element.precio;
      });
    }
  }
  addItemCart(producto) {
    let found = false;
    this.selectedItems.forEach((element) => {
      if (element.id == producto.id) {
        found = true;
      }
    });
    if (!found) {
      this.selectedItems.push(producto);
    }
    console.log(this.selectedItems);
  }
  saveItemsCart(){
    this.productosService.addCarrito(this.selectedItems);
  }
}
