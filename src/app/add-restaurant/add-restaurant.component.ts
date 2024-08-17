import { Component } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { Address } from '../model/Address';
import { Rating } from '../model/Rating';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrl: './add-restaurant.component.css'
})
export class AddRestaurantComponent {


  constructor(private service : RestaurantService){}


  restaurant= new Restaurant('', new Address('','','','',''), new Rating(0,''));


  // addRestaurant() {
  //   console.log("hello from the add restaurant");
  //   console.log(this.restaurant);
  // }



  addRestaurant() {
    this.service.addRestaurant1(this.restaurant).subscribe(
      response => {
        console.log('Restaurant added successfully:',JSON.stringify(response));
      },
      error => {
        console.error('There was an error adding the restaurant:', error);
      }
    );
  }

}
