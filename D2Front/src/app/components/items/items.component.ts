import { Component, OnInit } from '@angular/core';
import { Collectible, Item } from 'src/app/models/interfaces';
import { ItemService } from 'src/app/services/item-services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  
  constructor (private itemService: ItemService) { }

  ngOnInit(): void {
    
  }
}
