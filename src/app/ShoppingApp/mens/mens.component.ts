import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit{

  public Products:any[] = [];

  constructor(){}

  ngOnInit(): void {
    fetch("http://fakestoreapi.com/products/category/men's clothing")
    .then(Response=>Response.json())
    .then(data=>{
      this.Products= data;
    })
    
  }

}
