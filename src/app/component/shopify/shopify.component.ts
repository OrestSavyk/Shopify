import { Component, OnInit } from '@angular/core';
import { COOPERATION_LOGOS_ITEMS, SERVICES_ITEMS } from './shopify.constant';

@Component({
  selector: 'app-shopify',
  templateUrl: './shopify.component.html',
  styleUrls: ['./shopify.component.scss'],
})
export class ShopifyComponent implements OnInit {
  ServicesItems: any[] = SERVICES_ITEMS;
  CooperationLogosItems: any[] = COOPERATION_LOGOS_ITEMS;
  constructor() {}

  ngOnInit(): void {}
}
