import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "Grilled Chicken",
      foodDetails: "grilovano povrće, pekarski krompir",
      foodPrice: 645,
      foodImg: "../../assets/img/food.jpg"
    },
    {
      id: 2,
      foodName: "Burger",
      foodDetails: "burger sos, iceberg, crveni luk, kiseli krastavac",
      foodPrice: 795,
      foodImg: "../../assets/img/burger.jpg"
    },
    {
      id: 3,
      foodName: "Shrimp Noodles",
      foodDetails: "nudle sa skampima u paradajz sosu",
      foodPrice: 1100,
      foodImg: "../../assets/img/noodles.jpg"
    },
    {
      id: 4,
      foodName: "Pizza",
      foodDetails: "pelat, kačkavalj, tunjevina, crni luk, masline, origano",
      foodPrice: 895,
      foodImg: "../../assets/img/pizza.jpg"
    },
    {
      id: 5,
      foodName: "Ramen Noodles",
      foodDetails: "dugo kuvana supa, nudle, slanina, marinirano kuvano jaje, nori alge, pšenične nudle 200 grama",
      foodPrice: 875,
      foodImg: "../../assets/img/ramen.jpg"
    },
    {
      id: 6,
      foodName: "Salad Bowl",
      foodDetails: "avokado, iceberg, chilli, rukola, cherry paradajz",
      foodPrice: 750,
      foodImg: "../../assets/img/salad.jpg"
    },
    {
      id: 7,
      foodName: "Seasoned Salmon",
      foodDetails: "losos sa grilovanim povrcem",
      foodPrice: 1050,
      foodImg: "../../assets/img/salmon.jpg"
    },
    {
      id: 8,
      foodName: "Seafood Pasta",
      foodDetails: "pasta sa morskim plodovima u paradajz sosu",
      foodPrice: 950,
      foodImg: "../../assets/img/seafood.jpg"
    },
    {
      id: 9,
      foodName: "Medium rare steak",
      foodDetails: "steak sa grilovanim povrcem",
      foodPrice: 1995,
      foodImg: "../../assets/img/steak.jpg"
    },
    {
      id: 10,
      foodName: "Sushi",
      foodDetails: "razne vrste susija",
      foodPrice: 1225,
      foodImg: "../../assets/img/sushi.jpg"
    },
    {
      id: 11,
      foodName: "Cheesecake",
      foodDetails: "plazma keks, maskarpone sir, mesavina sumskog voca",
      foodPrice: 435,
      foodImg: "../../assets/img/cheesecake.jpg"
    },
    {
      id: 12,
      foodName: "Pancakes",
      foodDetails: "americke palacinke sa sezonskim vocem i cokoladom",
      foodPrice: 395,
      foodImg: "../../assets/img/pancakes.jpg"
    },
    {
      id: 13,
      foodName: "Choco Bars",
      foodDetails: "stanglice sa tri vrste cokolade",
      foodPrice: 450,
      foodImg: "../../assets/img/bars.jpg"
    }
  ];
}
