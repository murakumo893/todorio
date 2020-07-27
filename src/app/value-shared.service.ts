import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class ValueSharedService {

  public user: User

  constructor() { }

  getCurrentUser(): User {
    return this.user
  }

}