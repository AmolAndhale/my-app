import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demodirective',
  templateUrl: './demodirective.component.html',
  styleUrls: ['./demodirective.component.css']
})
export class DemodirectiveComponent implements OnInit{


  public mars:any={};

  ngOnInit(): void {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(Response=>Response.json())
    .then(data=>{
       this.mars=data;
    })
  }


}
