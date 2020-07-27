import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user'

@Injectable({ providedIn: 'root' })
export class UserService {

  private usersUrl = 'api/users'

  constructor(
    private http: HttpClient) { }

  getUser(): Observable<User> {
    // 本来ならログインしてIDを取得するが、今回はモックなので決め打ち
    const url = `${this.usersUrl}/1`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`User login successed`))
    );
  }
}