import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersList: User[] = [
    {
      id: 1,
      username: 'Abhishek',
      gender: 'Male',
      email: 'abhishek@gmail.com',
      phoneNumber: 9650894480,
      dateOfBirth: '1995-01-20',
      isActive: true
    },
    {
      id: 2,
      username: 'John',
      gender: 'Male',
      email: 'john@gmail.com',
      phoneNumber: 9876543210,
      dateOfBirth: '1992-07-16',
      isActive: true
    },
    {
      id: 3,
      username: 'Kevin',
      gender: 'Male',
      email: 'kevin@gmail.com',
      phoneNumber: 9876543210,
      dateOfBirth: '1988-10-25',
      isActive: true
    }
  ];

  // Here we call our WebAPI Service for fetching Users
  listUsers(): User[] {
      return this.usersList;
  }

  // Here we call our WebAPI Service for saving record in Database
  saveUser(user: User): void {
      this.usersList.push(user);
  }

  constructor() { }

}
