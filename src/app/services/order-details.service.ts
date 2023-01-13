import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "Grilled Sandwich",
      foodDetails: "Pan fried masala paneer",
      foodPrice: 200,
      foodImg: "../../assets/img/food.jpg"
    },
    {
      id: 2,
      foodName: "Grilled Sandwich",
      foodDetails: "Pan fried masala paneer",
      foodPrice: 200,
      foodImg: "../../assets/img/food.jpg"
    },
    {
      id: 3,
      foodName: "Grilled Sandwich",
      foodDetails: "Pan fried masala paneer",
      foodPrice: 200,
      foodImg: "../../assets/img/food.jpg"
    },
    {
      id: 4,
      foodName: "Grilled Sandwich",
      foodDetails: "Pan fried masala paneer",
      foodPrice: 200,
      foodImg: "../../assets/img/food.jpg"
    },
    {
      id: 5,
      foodName: "Grilled Sandwich",
      foodDetails: "Pan fried masala paneer",
      foodPrice: 200,
      foodImg: "../../assets/img/food.jpg"
    },
    {
      id: 6,
      foodName: "Grilled Sandwich",
      foodDetails: "Pan fried masala paneer",
      foodPrice: 200,
      foodImg: "../../assets/img/food.jpg"
    }
  ];
}
