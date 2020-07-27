import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[]

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.getTasks()
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
  }

}