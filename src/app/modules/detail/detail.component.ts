import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from '../../services/http.service';
import { StoreService } from '../../services/store.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  providers: [HttpService]
})

export class DetailComponent implements OnInit {
  private item: List;
  private id: number;

  constructor(private activateRoute: ActivatedRoute, private storeService: StoreService, private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params.id;
    this.item = this.storeService.list.filter(item => item.id === parseInt(String(this.id), 10))[0];
    this.item !== undefined ? this.updateItemView() : this.router.navigate(['']);
  }

  private deleteItem() {
    this.storeService.list = this.storeService.list.filter(item => item.id !== parseInt(String(this.id), 10));
    this.goBack();
  }

  private updateItemView() {
    const key = this.storeService.list.findIndex(item => item.id === parseInt(String(this.id), 10));
    const count = this.storeService.list[key].views;

    this.storeService.list[key].views = count + 1;
  }

  private goBack() {
    this.router.navigate(['']);
  }
}
