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
      tap(_ => this.log(`User login successed`)),
      catchError(this.handleError<User>(`User login failed`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }
}