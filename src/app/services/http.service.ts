import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from '../models/list.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getList(): Observable<List[]> {
    return this.http.get('/assets/list.json').pipe(map(data => data['list']));
  }
}
