import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './auth.guard';
// import { ShopComponent } from './ShoppingApp/shop/shop.component';
// import { CatalogComponent } from './ShoppingApp/catalog/catalog.component';
// import { MensComponent } from './ShoppingApp/mens/mens.component';
// import { WomenComponent } from './ShoppingApp/women/women.component';
// import { NofoundComponent } from './ShoppingApp/nofound/nofound.component';
// import { KidsComponent } from './ShoppingApp/kids/kids.component';
// import { LoginComponent } from './components/login/login.component';
import { LoginerrorComponent } from './ShoppingApp/loginerror/loginerror.component';
import { LoginpageComponent } from './ShoppingApp/loginpage/loginpage.component';
// import { SearchComponent } from './ShoppingApp/search/search.component';
import { NewuserComponent } from './ShoppingApp/newuser/newuser.component';
// import { HomepageComponent } from './ShoppingApp/homepage/homepage.component';
// import { CartComponent } from './ShoppingApp/cart/cart.component';
// import { AdminComponent } from './ShoppingApp/admin/admin.component';
// import { UserComponent } from './ShoppingApp/user/user.component';



const routes : Routes = [
    
    // {path:"shop", component: ShopComponent},
    // {path:"catalog", component:CatalogComponent},
    // {path:"kids", component: KidsComponent},
    // {path:"mens", component:MensComponent},
    // {path:"women", component:WomenComponent},
    // {path:"login", component:LoginComponent},
     {path:"", redirectTo:"/loginpage",pathMatch: "full"},
    {path:"loginpage", component:LoginpageComponent},
    {path:"loginerror", component:LoginerrorComponent},
    //  { path: '', redirectTo: '/app', pathMatch: 'full' },
    // {path:"search", component:SearchComponent},
    // {path:"homepage", component:HomepageComponent},
    // {path:"admin", component:AdminComponent },
    // {path:"user", component:UserComponent},
    // {path:"", redirectTo: "/user", pathMatch: "full"},
    {path:"newuser", component:NewuserComponent},
    // {path:"cart", component:CartComponent},

    // // {path:"", component: HomepageComponent},
    // {path:"**", component: NofoundComponent},
    //{ path: 'protected', canActivate: [AuthGuard], component: LoginpageComponent }, // Example of a protected route

    
    

    
]; 


@NgModule({ 
 imports : [RouterModule.forRoot(routes)], 
 exports : [RouterModule] 
 }) 


export class AppRoutingModule {

 }







// import { NgModule } from '@angular/core'; 
// import { RouterModule, Routes } from '@angular/router';
// import { ShopComponent } from './ShoppingApp/shop/shop.component';
// import { CatalogComponent } from './ShoppingApp/catalog/catalog.component';
// import { MensComponent } from './ShoppingApp/mens/mens.component';
// import { WomenComponent } from './ShoppingApp/women/women.component';
// import { NofoundComponent } from './ShoppingApp/nofound/nofound.component';
// import { KidsComponent } from './ShoppingApp/kids/kids.component';
// import { LoginComponent } from './components/login/login.component';
// import { LoginerrorComponent } from './ShoppingApp/loginerror/loginerror.component';
// import { LoginpageComponent } from './ShoppingApp/loginpage/loginpage.component';
// import { SearchComponent } from './ShoppingApp/search/search.component';
// import { NewuserComponent } from './ShoppingApp/newuser/newuser.component';
// import { HomepageComponent } from './ShoppingApp/homepage/homepage.component';
// import { CartComponent } from './ShoppingApp/cart/cart.component';
// import { AdminComponent } from './ShoppingApp/admin/admin.component';
// import { UserComponent } from './ShoppingApp/user/user.component';



// const routes : Routes = [
//     {path:"admin", component:AdminComponent, rol children:[
//     {path:"shop", component: ShopComponent},
//     {path:"catalog", component:CatalogComponent},
//     {path:"kids", component: KidsComponent},
//     {path:"mens", component:MensComponent},
//     {path:"women", component:WomenComponent},
//     {path:"login", component:LoginComponent},
//     {path:"loginpage", component:LoginpageComponent},
//     {path:"loginerror", component:LoginerrorComponent},
//     {path:"search", component:SearchComponent},
//     {path:"homepage", component:HomepageComponent},
//     {path:"", redirectTo: "/user", pathMatch: "full"},
//     {path:"newuser", component:NewuserComponent},
//     {path:"cart", component:CartComponent},

//     // {path:"", component: HomepageComponent},
//     // {path:"**", component: NofoundComponent},
//     ]},
    
    
//     {path:"admin", component:AdminComponent },
//     {path:"user", component:UserComponent , children:[
//         {path:"shop", component: ShopComponent},
//         {path:"homepage", component:HomepageComponent}

//     ]},
    

    
    

    
// ]; 


// @NgModule({ 
//  imports : [RouterModule.forRoot(routes)], 
//  exports : [RouterModule] 
//  }) 


// export class AppRoutingModule {

//  }