import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  favoriteProducts$: Observable<any[]> = this.favorite.getFavoriteProducts();

  constructor(private favorite: FavoriteService){}

  ngOnInit(): void {
    // this.favoriteProducts$ = this.favorite.getFavoriteProducts();
    
  }

  // getFavoriteProducts(): void{
  //   this.favoriteProducts = this.favorite.getFavoriteProducts();
  // }

}
