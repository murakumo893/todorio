import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task'
import { UserService } from '../user.service';
import { User } from '../user';
import { ValueSharedService } from '../value-shared.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[]

  @Input() user: User

  constructor(
    private taskService: TasksService,
    private userService: UserService,
    private valueShared: ValueSharedService
    ) { }

  ngOnInit() {
    this.getTasks()
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks.reverse())
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

  addTask(title:string, memo:string): void{
    title = title.trim()
    memo = memo.trim()
    if (!title) {
      return
    }

    let task : {
      title: string
      memo: string
      completed: boolean
    } = {
      title,
      memo,
      completed: false
    }

    this.taskService.addTask(task as unknown as Task).subscribe(
      task => this.tasks.unshift(task) // 一番目に追加するのでpushではなくunshift
    )
  }

}