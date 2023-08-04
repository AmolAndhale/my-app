import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from '../shop/shop.component';
import { HomepageComponent } from '../homepage/homepage.component';




const routes : Routes = [ 
{path:"homepage", component:HomepageComponent},
{path:"shop", component:ShopComponent}

    
]; 


@NgModule({ 
 imports : [RouterModule.forRoot(routes)], 
 exports : [RouterModule] 
 }) 


export class AppRoutingModule {

 }