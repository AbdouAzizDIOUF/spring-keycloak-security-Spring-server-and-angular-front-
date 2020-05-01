import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id:1, name:"Computer Dell", price:"45.5$"},
      {id:2, name:"Phone Nokia edge", price:"451.5$"},
      {id:3, name:"Printer LX ER", price:"75.5$"}
    ];
  }

}
