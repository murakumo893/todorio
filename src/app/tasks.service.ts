import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './task'

@Injectable({ providedIn: 'root' })
export class TasksService {

  private taskUrl = 'api/tasks'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl)
      .pipe(
        tap(_ => console.log('fetched heroes'))
      );
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(this.taskUrl, task, this.httpOptions).pipe(
      tap(_ => console.log('task status updated'))
    )
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.taskUrl}/${task.id}`, this.httpOptions).pipe(
      tap(_ => console.log('task deteled'))
    )
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, task, this.httpOptions).pipe(
      tap((newTask: Task) => console.log(`added task w/ id=${newTask.id}`))
    )
  }
}