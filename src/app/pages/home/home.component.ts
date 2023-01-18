import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: OrderDetailsService) { }

  foodData: any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

  aboutText: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore et, dolor nobis consectetur, deleniti voluptatum neque illum iusto atque doloribus repellat debitis id facilis nam?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum at saepe eligendi cum magnam natus nihil fugiat dolores tempore, animi facilis, ratione beatae sapiente sunt, nemo tempora quas. Quas, in fuga! Sapiente, minus modi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni enim corrupti recusandae ipsam incidunt doloremque provident illum officiis facere obcaecati exercitationem, dolores a. Ea eaque ipsa fugiat aliquid placeat velit mollitia perferendis at praesentium nulla neque molestias, necessitatibus, saepe ad magnam nisi adipisci officiis laborum? Quia neque obcaecati, expedita illum sint ratione porro! Aspernatur, possimus";


}
