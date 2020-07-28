import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ValueSharedService } from '../value-shared.service';
import { User } from '../user';
import { TasksService } from '../tasks.service';
import { Task } from '../task';
import { UserService } from '../user.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  // ログイン中のユーザー情報
  user: User

  tasks: Task[]

  constructor(
    private valueShared: ValueSharedService,
    private cd: ChangeDetectorRef,
    private taskService: TasksService,
    private userService: UserService

  ) { }

  ngOnInit() {
    this.getTasks()
  }

  ngAfterViewChecked() {
    this.user = this.valueShared.user
    this.cd.detectChanges()
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(
      tasks => this.tasks = tasks.reverse().filter(task => task.completed === false))
  }
  // タスクを未完↔完了に切り替える
  switchCompleteStatus(task: Task): void {
    task.completed = !task.completed
    this.taskService.updateTask(task).subscribe()
    this.userService.updateUserLevel(task, this.valueShared.getCurrentUser()).subscribe()
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task).subscribe()
  }

}