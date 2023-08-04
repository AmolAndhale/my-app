import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from 'src/app/ShoppingApp/mens/mens.component';
import { NaadminComponent } from './naadmin.component';
import { HomepageComponent } from 'src/app/ShoppingApp/homepage/homepage.component';
import { CatalogComponent } from 'src/app/ShoppingApp/catalog/catalog.component';
import { ShopComponent } from 'src/app/ShoppingApp/shop/shop.component';
import { KidsComponent } from 'src/app/ShoppingApp/kids/kids.component';
import { WomenComponent } from 'src/app/ShoppingApp/women/women.component';
import { LoginpageComponent } from 'src/app/ShoppingApp/loginpage/loginpage.component';
import { LoginerrorComponent } from 'src/app/ShoppingApp/loginerror/loginerror.component';
import { SearchComponent } from 'src/app/ShoppingApp/search/search.component';
import { CartComponent } from 'src/app/ShoppingApp/cart/cart.component';
import { NewuserComponent } from 'src/app/ShoppingApp/newuser/newuser.component';
import { NofoundComponent } from 'src/app/ShoppingApp/nofound/nofound.component';
import { FavoriteListComponent } from 'src/app/ShoppingApp/favorite-list/favorite-list.component';
import { FormPrimengComponent } from 'src/app/form-primeng/form-primeng.component';
import { MarginCalcComponent } from 'src/app/margin-calc/margin-calc.component';
import { authGuard } from 'src/app/auth.guard';


const routes : Routes = [
    {path:"naadmin", component:NaadminComponent,canActivate:[authGuard], children:[
        {path:"mens", component:MensComponent},
        {path:"homepage", component:HomepageComponent},
        {path:"catalog", component:CatalogComponent},
        {path:"shop", component:ShopComponent},
        {path:"kids", component:KidsComponent},
        {path:"women", component:WomenComponent},
        {path:"loginpage", component:LoginpageComponent},
        {path:"loginerror", component:LoginerrorComponent},
        {path:"search", component:SearchComponent},
        {path:"cart", component:CartComponent},
        {path:"newuser", component:NewuserComponent},
        {path:"favorite-list", component:FavoriteListComponent},
        {path:"form-primeng", component:FormPrimengComponent},
        {path:"margin-calc", component:MarginCalcComponent},
        {path:"", component:HomepageComponent},
        {path:"**", component:NofoundComponent}

    ]}

]; 


@NgModule({ 
 imports : [RouterModule.forRoot(routes)], 
 exports : [RouterModule] 
 }) 


export class NaadminRoutingModule {

 }