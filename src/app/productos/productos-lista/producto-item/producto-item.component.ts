import { Component, OnInit, Input, Output } from '@angular/core';
import { Producto } from '../../Producto';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  @Input() producto: Producto[];
  @Input() componentMode: number;
  constructor() { }
  ngOnInit() {
  }
}
