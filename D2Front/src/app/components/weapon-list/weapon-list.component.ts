import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/interfaces';
import { WeaponServiceService } from 'src/app/services/weapon-service/weapon-service.service';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent {

  private ITEM_ICON_URL = "https://www.bungie.net";
  @Input() weapons: Item[] = [];

  constructor(private weaponService: WeaponServiceService) { }

  ngOnInit() {
    this.getWeapon();
  }

  getWeapon(): void {
    this.weaponService.getWeapons().subscribe(weapons => this.weapons = weapons);
  }

  getWeaponIcon(relativeUrl: string) {
    return `${this.ITEM_ICON_URL}/${relativeUrl}`;
  }
}
