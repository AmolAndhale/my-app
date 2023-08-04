import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  
  public Categories:string[] = [];
  public Products:any[] = [];
  public CartItems:any[] = [];
  public CartCount:number = 0;
  public isCartVisible:boolean= false;
  public totalprice:number = 0;


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
    this.totalprice=0;
    for(const item of this.CartItems){
      this.totalprice +=item.price;
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

}
