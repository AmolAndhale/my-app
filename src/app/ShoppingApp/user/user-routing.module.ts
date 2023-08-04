import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from '../shop/shop.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginpageComponent } from '../loginpage/loginpage.component';





const routes : Routes = [ 
    {path:"shop",component:ShopComponent},
    {path:"homepage",component:HomepageComponent},
    {path:"loginpage",component:LoginpageComponent}
    
    
    
]; 


@NgModule({ 
 imports : [RouterModule.forRoot(routes)], 
 exports : [RouterModule] 
 }) 


export class AppRoutingModule {

 }