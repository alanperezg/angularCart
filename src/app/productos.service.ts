import { Injectable } from '@angular/core';
import { Producto } from './productos/Producto';

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
  carrito = [1,4];
  constructor() { }
  getProductos(): Producto[] {
    return this.productos.slice();
  }
  addCarrito(productoId: number){
    if(!this.carrito.includes(productoId)){
      this.carrito.push(productoId);
    }
  }
  getCarrito(): Producto[]{
    let productosCarrito: Producto[];
    for(let producto of this.carrito){
      this.productos.findIndex((element, index) => {
        if(element.id==producto){
          this.productos.slice(index, (index+1));
        }
        return null;
      });
    }
    return productosCarrito;
  }
}
