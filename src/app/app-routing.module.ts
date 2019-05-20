import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Task2Component } from './components/task2/task2.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail/:id', loadChildren: './modules/detail/detail.module#DetailModule'},
  { path: 'add', loadChildren: './modules/add/add.module#AddModule'},
  { path: 'task2', component: Task2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
