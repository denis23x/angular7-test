import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable()
export class StoreService {
  list: List[] = [];
  totalViews: number;

  constructor() { }

}
