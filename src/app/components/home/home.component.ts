import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  private listView: boolean;

  constructor(private httpService: HttpService, private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.totalViews = this.storeService.list.reduce((a, b) => a + b.views, 0);
  }
}
