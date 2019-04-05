import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../Producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  @Input() producto: Producto;
  @Input() componentMode: number;
  @Output() addItemCartLista = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  addItemCart(event){
    if(event.target.checked){
      this.addItemCartLista.emit(this.producto);
    }
  }
}
