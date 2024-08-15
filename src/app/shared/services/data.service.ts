import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InputInterface } from '../interfaces/input.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private itemUrl = 'api/item';

  constructor(private readonly http: HttpClient) {
  }

  public getItem(): Observable<InputInterface> {
    return this.http.get<InputInterface>(this.itemUrl);
  }

  public updateItem(updatedItem: Partial<InputInterface>): Observable<InputInterface> {
    return this.http.put<InputInterface>(this.itemUrl, updatedItem);
  }
}
