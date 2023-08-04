import { Component, OnInit } from '@angular/core';
import { ShopserviceService } from '../shopservice.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{

  public Products:any[] = [];
  public Categories:string[] = [];
  public selectCategory = '';


  constructor(private api:ShopserviceService){}

  ngOnInit(): void {
      this.api.GetCategories().subscribe(data=> this.Categories = data)
      this.api.GetProducts().subscribe(data=> this.Products = data)
      console.log(this.Categories);
    }
    
  

}