import { Component,OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit { 

  
  public Categories:string[] = [];
  public Products:any[] = [];
  public CartItems:any[] = [];
  public CartCount:number = 0;
  public isCartVisible:boolean= false;
  public ptotalprice:number = 0;
  public discount:number=0;
  public pfinalprice:number=0;
  public favProducts: any[] = [];


  constructor(
    private http: HttpClient,
    private favorite: FavoriteService){
      this.fetchProducts(0);
    }
    //   addToFavorites(id : Number): void {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//  .then(Response => Response.json())
//  .then(data =>{
//   this.CartItems.push(data);
//     this.favoriteProductService.addToFavorites(product);
//   }

public fetchProducts(id:number){
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(Response=>Response.json())
  .then(data=> {
    this.favProducts.push(data);
  })
 
}

    // public fetchProducts(): void {
    //   this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(
    //     (response: any[]) => {
    //       this.favProducts = response;
    //     },
    //     (error) => {
    //       console.error('Error fetching products:', error);
    //     }
    //   );
    // }

    public addToFavorites(Product:any):void{
      this.favorite.addToFavorites(Product);
      alert(`${Product.title}\nAdded To fav`);
    }

 
  public GetCartCount(){
    this.CartCount= this.CartItems.length;
  }


  public GetCategories(){
    fetch( "https://fakestoreapi.com/products/categories")
    .then(response=>response.json())
    .then(data=> {
      data.unshift("all");
      this.Categories = data;
    })
  }

  public GetProducts(url:string){
    fetch(url)
    .then(Response=>Response.json())
    .then(data=> {
      this.Products = data;
    })
  }


  


  ngOnInit(): void {
    this.GetCategories();
    this.GetProducts("https://fakestoreapi.com/products");
    this.GetCartCount();

    
  }
  public CategoryChanged(e:any){
    if(e.target.value=="all"){
      this.GetProducts("https://fakestoreapi.com/products");
    }else{
      this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);   
    }
  }
  public AddToCartClick(id:number){
   fetch(`https://fakestoreapi.com/products/${id}`)
   .then(Response => Response.json())
   .then(data =>{
    this.CartItems.push(data);  
    alert(`${data.title}\nAdded To Cart`);
    this.GetCartCount();
    this.GetTotalPrice();
   })
  }
  public ToggleCart(){
    this.isCartVisible = (this.isCartVisible==false)?true:false;
  }

  public GetTotalPrice(){
    this.ptotalprice=0;
    for(const item of this.CartItems){
      this.ptotalprice +=item.price;
    }
  }
  public RemoveItem(i:number){
    let flag = confirm("Are you sure Want to Delete?");
    if(flag==true){
      this.CartItems.splice(i,1);
      this.GetTotalPrice();
      this.GetCartCount();
    }
    
  }
  public PayablePrice():void {
    const discountAmount = (this.ptotalprice * this.discount) / 100;
    this.pfinalprice = this.ptotalprice - discountAmount;
    
  }

}