import { Component, OnInit } from '@angular/core';
import { faAd, faAngleRight, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { listanimationXX } from 'src/app/animation';

@Component({
  selector: 'app-payements',
  templateUrl: './payements.component.html',
  styleUrls: ['./payements.component.scss'],
  animations:[
    listanimationXX
  ]
})
export class PayementsComponent implements OnInit {
  icon = [faAd,faAppleAlt,faAngleRight]
  images = ['carte-visa.webp','carte-visa.webp','carte-visa.webp']
  constructor() { }

  ngOnInit(): void {
  }
  slide(){

  }
}
