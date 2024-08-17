import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:8080/api/restaurants'; 
  private apiUrl1 = 'http://localhost:8080/api/restaurants/addresturent';


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  searchRestaurants(query: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}?search=${query}`, this.httpOptions);
  }

  addRestaurant(restaurant: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, restaurant, this.httpOptions);
  }



  addRestaurant1(restaurant: Restaurant): Observable<Restaurant> {
    return this.httpClient.post<Restaurant>(this.apiUrl1, restaurant, this.httpOptions);
  }
  getRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(this.apiUrl1,this.httpOptions);
  }

}
