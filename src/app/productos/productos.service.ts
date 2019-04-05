import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos = [
    new Producto(1, 'Producto 1', 'Marca 1', 'Categoria 1', 10, 10),
    new Producto(2, 'Producto 2', 'Marca 2', 'Categoria 2', 20, 20),
    new Producto(3, 'Producto 3', 'Marca 3', 'Categoria 3', 30, 30),
    new Producto(4, 'Producto 4', 'Marca 4', 'Categoria 4', 40, 40),
    new Producto(5, 'Producto 5', 'Marca 5', 'Categoria 5', 50, 50),
  ];
  private carrito: Producto[] = [];
  constructor() { }
  getProductos(): Producto[] {
    return this.productos.slice();
  }
  getProducto(id: number): Producto {
    let producto = null;
    this.productos.forEach((element) => {
      if (element.id == id) {
        producto = new Producto(element.id, element.nombre, element.marca, element.categoria, element.precio, element.existencia);
      }
    });
    return producto;
  }
  addCarrito(productos: Producto[]) {
    for(let produto of productos) {
      let found = false;
      this.carrito.forEach((element) => {
        if(produto.id == element.id) {
          found = true;
        }
      });
      if(!found) {
        this.carrito.push(produto);
      }
    }
  }
  getCarrito(): Producto[] {
    return this.carrito;
  }
}
