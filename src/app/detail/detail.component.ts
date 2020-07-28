import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Task } from '../task'
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() task: Task

  updated: boolean = false

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.getTask()
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get("id")
    this.tasksService.getTask(id)
      .subscribe(task => this.task = task)
  }

  updateTask(): void {
    this.updated = false
    this.tasksService.updateTask(this.task)
      .subscribe(() => this.updated = true)
  }

  goBack(): void {
    this.location.back();
  }

}