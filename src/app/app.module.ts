import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NaadminRoutingModule } from './NewApp/naadmin/naadmin.routing.module';
import { NauserRoutingModule } from './NewApp/nauser/nauser.routing.module';
import { CartdataService } from './ShoppingApp/cartdata.service';
import { FavoriteService } from './ShoppingApp/favorite.service';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';




   




import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NetflixindexComponent } from './NetflixWebsite/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './NetflixWebsite/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './NetflixWebsite/netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './NetflixWebsite/netflixregister/netflixregister.component';
import { DatabindingComponent } from './components/databinding/databinding/databinding.component';
import { DemodirectiveComponent } from './components/demodirective/demodirective/demodirective.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShopindexComponent } from './ShoppingApp/shopindex/shopindex.component';
import { ShopComponent } from './ShoppingApp/shop/shop.component';
import { CatalogComponent } from './ShoppingApp/catalog/catalog.component';
import { KidsComponent } from './ShoppingApp/kids/kids.component';
import { MensComponent } from './ShoppingApp/mens/mens.component';
import { WomenComponent } from './ShoppingApp/women/women.component';
import { NofoundComponent } from './ShoppingApp/nofound/nofound.component';
import { LoginerrorComponent } from './ShoppingApp/loginerror/loginerror.component';
import { LoginpageComponent } from './ShoppingApp/loginpage/loginpage.component';
import { SearchComponent } from './ShoppingApp/search/search.component';
import { NewuserComponent } from './ShoppingApp/newuser/newuser.component';
import { HomepageComponent } from './ShoppingApp/homepage/homepage.component';
import { CartComponent } from './ShoppingApp/cart/cart.component';
import { AdminComponent } from './ShoppingApp/admin/admin.component';
import { UserComponent } from './ShoppingApp/user/user.component';
import { NaadminComponent } from './NewApp/naadmin/naadmin.component';
import { NauserComponent } from './NewApp/nauser/nauser.component';
import { FavoriteListComponent } from './ShoppingApp/favorite-list/favorite-list.component';
import { FormPrimengComponent } from './form-primeng/form-primeng.component';
import { MarginCalcComponent } from './margin-calc/margin-calc.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NetflixindexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    DatabindingComponent,
    DemodirectiveComponent,
    ShoppingcartComponent,
    SignuppageComponent,
    RegistrationComponent,
    ShopindexComponent,
    ShopComponent,
    CatalogComponent,
    KidsComponent,
    MensComponent,
    WomenComponent,
    NofoundComponent,
    LoginerrorComponent,
    LoginpageComponent,
    SearchComponent,
    NewuserComponent,
    HomepageComponent,
    CartComponent,
    AdminComponent,
    UserComponent,
    NaadminComponent,
    NauserComponent,
    FavoriteListComponent,
    FormPrimengComponent,
    MarginCalcComponent,
    
    
    
    
    
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NaadminRoutingModule,
    NauserRoutingModule,
    AccordionModule,
    TableModule,
    RatingModule,
    DropdownModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    RadioButtonModule,
    InputTextareaModule,
  


    
    
  
    
  
  ],
  providers: [CartdataService, FavoriteService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
