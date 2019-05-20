import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})

export class AppComponent {
  constructor(private httpService: HttpService, private storeService: StoreService) {
    this.httpService.getList().subscribe(data => {
      this.storeService.list = data;
      this.storeService.totalViews = data.reduce((a, b) => a + b.views, 0);
    });
  }
}
