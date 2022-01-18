import { Component } from '@angular/core';
import { COOPERATION_LOGOS_ITEMS, SERVICES_ITEMS } from './shopify.constant';

@Component({
  selector: 'app-shopify',
  templateUrl: './shopify.component.html',
  styleUrls: ['./shopify.component.scss'],
})
export class ShopifyComponent {
  servicesItems: any[] = SERVICES_ITEMS;
  cooperationLogosItems: any[] = COOPERATION_LOGOS_ITEMS;
  constructor() {}
}
