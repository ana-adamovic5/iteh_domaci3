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

  aboutText: string = "eatingMode je jedan od prvih restorana zaslužnih za transformaciju do tada napuštene i zaboravljene Beton Hale u sada već kultno mesto beogradske gastronomske scene i nezaobilaznu turističku destinaciju na obali Save. Ponosno služimo naše goste od 2010. godine, ponudom koja podrazumeva najbolje iz italijanske i mediteranske kuhinje u kombinaciji sa najfinijim iz Josper grila uz jedinstvenu ponudu bara i našu veoma pažljivo biranu vinsku kartu. Sve to uz vrlo diskretan kreativni zamah u jedinstvenom enterijeru jer želimo samo najbolje za vas. Mesto gde jedete. Gde otkrivate iskustva. Gde uživate."

}
