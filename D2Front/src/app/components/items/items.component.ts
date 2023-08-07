import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/interfaces';
import { ItemService } from 'src/app/services/item-services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  
  private ITEM_ICON_URL = "https://www.bungie.net";

  constructor (private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  getIcons(relativeUrl: string) {
    return `${this.ITEM_ICON_URL}/${relativeUrl}`;
  }
}
