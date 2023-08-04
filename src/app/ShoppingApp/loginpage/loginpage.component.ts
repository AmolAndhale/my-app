import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{
   
  isLoginPageVisible:any=true;

    constructor(private router: Router){

    }

  ngOnInit(): void {
    
  }

  LoginClick(userdetails:any){
    localStorage.setItem('token', Math.random().toString()); 
     if(userdetails.UserName=='admin' && userdetails.Password=='admin'){
      this.router.navigate(['/naadmin']);
      
     }
     else if(userdetails.UserName=='user' && userdetails.Password=='user'){
      this.router.navigate(['/nauser']);
     }
     else{
        this.router.navigate(['loginerror']);
     }
  }
}
