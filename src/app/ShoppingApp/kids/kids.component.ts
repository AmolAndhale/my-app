import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit{

  public Products:any[] = [];

  constructor(){}

  ngOnInit(): void {
    fetch("http://fakestoreapi.com/products/category/electronics")
    .then(Response=>Response.json())
    .then(data=>{
      this.Products= data;
    })
    
  }

}
