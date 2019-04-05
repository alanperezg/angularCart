import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: Producto;
  constructor(private router: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit() {
    this.router.params.subscribe((params => {
    this.producto = this.productosService.getProducto(params.id);
    }));
  }

}
