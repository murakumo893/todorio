import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User

  topNav: boolean
  tasksNav: boolean
  

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.userService.getUser().subscribe(user => this.user = user)
  }

  activate(event: any) : void {
    const classList = event.target.classList
    if (classList.contains('active')) {
      return
    } else {
      const lis = event.target.parentElement.parentElement.children;
      for (let li of lis) {
        li.children[0].classList.remove('active')
      }
      classList.add('active')
    }
  }

}