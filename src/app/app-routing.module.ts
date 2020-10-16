import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './users/create-user.component';
import { ListUsersComponent } from './users/list-users.component';
import { UsersChartComponent } from './users/users-chart.component';

const routes: Routes = [
  {path: 'create-user', component: CreateUserComponent},
  {path: 'user-list', component: ListUsersComponent},
  {path: 'analytics', component: UsersChartComponent},
  {path: '', redirectTo: '/create-user', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
