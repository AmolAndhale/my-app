import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopserviceService {

  constructor(private http: HttpClient) { }

  public GetCategories():Observable<string[]>{
    return this.http.get<string[]>('http://fakestoreapi.com/products/categories');

  }
  public GetProducts():Observable<any[]>{
    return this.http.get<any[]>('http://fakestoreapi.com/products');

  }

  public searchData(searchTerm: string): Observable<any> {
    // Make an HTTP GET request to your API, passing the search term as a query parameter
    return this.http.get<any>(`http://fakestoreapi.com/products?title=${searchTerm}`);
  }
}  
