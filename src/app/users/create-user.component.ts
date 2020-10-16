import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = {
    id: null,
    username: null,
    gender: null,
    email: null,
    phoneNumber: null,
    dateOfBirth: null,
    isActive: null ? true : false
  };

  constructor(private objuser: UserService, private objrouter: Router) { }

  ngOnInit(): void {
  }

  saveUser(temp: any): void {
    this.objuser.saveUser(temp);
    this.objrouter.navigate(['user-list']);
  }

}
