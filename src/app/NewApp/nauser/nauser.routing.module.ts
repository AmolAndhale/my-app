import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { NauserComponent } from './nauser.component';
import { HomepageComponent } from 'src/app/ShoppingApp/homepage/homepage.component';
import { CartComponent } from 'src/app/ShoppingApp/cart/cart.component';
import { LoginpageComponent } from 'src/app/ShoppingApp/loginpage/loginpage.component';
import { NofoundComponent } from 'src/app/ShoppingApp/nofound/nofound.component';
import { ShopComponent } from 'src/app/ShoppingApp/shop/shop.component';
import { SearchComponent } from 'src/app/ShoppingApp/search/search.component';


const routes : Routes = [
    {path:"nauser", component:NauserComponent, children:[
        {path:"shop", component:ShopComponent},
        {path:"cart", component:CartComponent},
        {path:"loginpage", component:LoginpageComponent},
        {path:"search", component:SearchComponent},

        {path:"", component:HomepageComponent},
        {path:"**", component:NofoundComponent}

    ]}
    

]; 


@NgModule({ 
 imports : [RouterModule.forRoot(routes)], 
 exports : [RouterModule],
//  declarations:[HomepageComponent]
 }) 


export class NauserRoutingModule {

 }