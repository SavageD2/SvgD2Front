import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private API_URL = "http://localhost:8080";


  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.API_URL}/api/items/w`);
  }


}
