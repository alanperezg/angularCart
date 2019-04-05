import { Component, OnInit } from '@angular/core';
import { Producto } from '../productos/Producto';
import { Subscription } from 'rxjs';
import { ProductosService } from '../productos.service';
@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {
  
  constructor(private productosService: ProductosService) { }
  productos: Producto[];
  suscript: Subscription;

  ngOnInit() {
    this.productos=this.productosService.getProductos();
  }

}
