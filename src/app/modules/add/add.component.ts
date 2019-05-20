import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})

export class AddComponent implements OnInit {
  private readonly myForm: FormGroup;
  private thumbnails: object;

  constructor(private storeService: StoreService, private router: Router) {
    this.myForm = new FormGroup({
      image: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      description: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    });
  }

  ngOnInit() {
    this.thumbnails = ['3256.jpg', '3258.jpg', '4187.jpg', '4188.jpg'];
  }

  private haveError(name) {
    return this.myForm.controls[name].invalid && this.myForm.controls[name].dirty;
  }

  private submit() {
    const maxId = this.storeService.list.map(({ id }) => id);
    const newId = Math.max.apply(null, (maxId.length === 0 ? [0] : [maxId.length]));

    this.storeService.list.push({
      id: newId === 0 ? 0 : newId + 1,
      image: this.myForm.value.image,
      name: this.myForm.value.name,
      description: this.myForm.value.description,
      views: 0,
    });

    this.router.navigate(['']);
  }
}
