import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "../services/suppliers.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  public suppliers:any;
  public errorMessage: any;

  constructor(private http:HttpClient, private suppliersService:SuppliersService) { }

  ngOnInit(): void {
    this.suppliersService.getSuppliers()
      .subscribe(data=>{
        this.suppliers=data;
      }, error => {
        console.log(error);
        this.errorMessage=error.error.message;
      });
  }

}
