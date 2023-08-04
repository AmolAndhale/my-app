import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favoriteProducts: any[] = [];

   public addToFavorites(product: any): void {
    this.favoriteProducts.push(product);
  }

  removeFromFavorites(product: any): void {
    const index = this.favoriteProducts.indexOf(product);
    if (index !== -1) {
      this.favoriteProducts.splice(index, 1);
    }
  }

  public getFavoriteProducts():Observable <any[]> {
    return of (this.favoriteProducts);
  }
  

  // constructor(private favoriteProducts: HttpClient) { }
}
