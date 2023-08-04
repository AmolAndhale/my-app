import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  
    public product:any={};
    public Stock:boolean=false;
    public tableWidth:number=200;
    public tableHeight:number=100;

    public LoadProduct():void{
      fetch("https://fakestoreapi.com/products/1")
      .then(Response=> Response.json())
      .then(data => {
        this.product=data;
      })
    }

  ngOnInit(): void {
    this.LoadProduct();
    
  }

}
