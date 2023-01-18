import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  p: number = 1;
  itemsPerPage: number = 6;
  totalProducts: any;

  constructor(private service: OrderDetailsService) { }
  foodData: any;
  ngOnInit() {
    this.foodData = this.service.foodDetails;
    this.totalProducts = this.service.foodDetails.length;
  }


}
