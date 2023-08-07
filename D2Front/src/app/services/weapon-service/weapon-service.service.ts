import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/interfaces';
import { environment } from 'src/environements/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class WeaponServiceService {

  
  constructor(private http: HttpClient) { }

  getWeapons(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/api/items/w`);
  }
}
