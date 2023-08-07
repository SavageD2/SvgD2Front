import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { PerksComponent } from './components/perks/perks.component';
import { StatsComponent } from './components/stats/stats.component';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    PerksComponent,
    StatsComponent,
    WeaponListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
