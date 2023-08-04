import { Component, OnInit } from '@angular/core';
import { ShopserviceService } from '../shopservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  
  ngOnInit(): void {

  }
  searchTerm: string= '';
  searchResults: any[] = [];

  constructor(private apiService: ShopserviceService) {}

  search(): void {
    // Call the API service's searchData() method with the search term
    this.apiService.searchData(this.searchTerm)
      .subscribe(response => {
        this.searchResults = response.filter((product:any) =>
          product.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
        // Handle the API response here
        console.log(response);
      });
  }
}


// public Products:any[] = [];
  // public Searchvalue:string[] =[];

  // constructor(){}

  // public GetProducts(url:string){
  //   fetch(url)
  //   .then(Response=>Response.json())
  //   .then(data=> {
  //     this.Products = data;
  //   })
  // }

  // ngOnInit(): void {
  //   fetch("http://fakestoreapi.com/products")
  //   .then(Response=>Response.json())
  //   .then(data=>{
  //     this.Products= data;
  //   })
    
  // }
  // public OnSearch(e:any){
  //   this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
  // }

  // public textinput(){
    
  // }
