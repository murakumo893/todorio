import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user'
import { Task } from './task'

@Injectable({ providedIn: 'root' })
export class UserService {

  private usersUrl = 'api/users'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getUser(): Observable<User> {
    // 本来ならログインしてIDを取得するが、今回はモックなので決め打ち
    const url = `${this.usersUrl}/1`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`User login successed`))
    );
  }

  updateUserLevel(task: Task, user: User): Observable<any> {

    if (task.completed) {
      user.level++
    } else {
      user.level--
    }

    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => console.log('user level updated'))
    )
  }
}