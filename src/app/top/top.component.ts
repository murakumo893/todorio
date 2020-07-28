import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ValueSharedService } from '../value-shared.service';
import { User } from '../user';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  // ログイン中のユーザー情報
  user: User

  constructor(
    private valueShared: ValueSharedService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.user = this.valueShared.user
    this.cd.detectChanges()
  }

}