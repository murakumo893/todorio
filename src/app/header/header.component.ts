import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'
import { Nav } from '../nav'
import { Router } from '@angular/router';
import { CONSTANTS } from '../constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // ログイン中のユーザー情報
  user: User
  // ナビゲーションの情報
  routes : Nav[] = []
  
  constructor(
    private userService: UserService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // ユーザー情報を取得
    this.getUser()
    // ナビゲーション情報を取得
    for (let [k, v] of CONSTANTS.ROUTERS) {
      this.routes.push({path:v, name:k, active:false})
    }
  }

  ngAfterViewChecked() {
    // 現在ページのナビゲーションの色を変える
    // 描画と変更が終わった後でないと
    // this.router.urlの値が / になってしまい、 /tasksのように
    // 期待したパスを取れないのでこうしている
    this.addActivateClass(this.router.url)
    this.cd.detectChanges()
  }

  // ユーザー情報を取得
  getUser(): void {
    this.userService.getUser().subscribe(user => this.user = user)
  }

  // クリック時に現在ページのナビゲーションの色を変える
  activateOnClick(event: any) : void {
    if (event.target.classList.contains('active')) {
      return
    } else {
      // ナビゲーションリンクのアクティブを外す
      this.routes.map(route => route.active = false)
      this.addActivateClass(event.target.pathname)
    }
  }

  // activeクラスの付与処理
  addActivateClass(path: string): void {
    this.routes.filter(route => route.path === path).map(route => route.active = true)
  }

}