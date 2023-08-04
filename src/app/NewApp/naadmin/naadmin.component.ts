import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naadmin',
  templateUrl: './naadmin.component.html',
  styleUrls: ['./naadmin.component.css']
})
export class NaadminComponent {

  constructor(private router:Router){}
  
  isbuttonclick:boolean=true;
  onloginclick(){
    this.isbuttonclick=true;
  }
  onlogoutclick(){
    const confirmation = confirm('Do you want to Logout');
    if(confirmation){
      localStorage.removeItem('token');
     this.router.navigate(['/loginpage']);
    }
  }

}
