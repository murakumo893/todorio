import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 11, title: 'カレーをつくる', memo: 'ルーを買うのを忘れない', completed:true },
      { id: 12, title: 'ネコに餌をやる', memo: '水も換えておく', completed:true },
      { id: 14, title: 'サーモンを買う', memo: '', completed:false },
      { id: 15, title: 'メールの返信', memo: '日曜日までにやる', completed:false },
      { id: 16, title: '集合時間を連絡しておく', memo: 'Aさん、Bさん、Cさん', completed:false }
    ];
    const users = [
      { id:1, name: 'murakumo', level:5 }
    ];
    return {tasks, users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(hero => hero.id)) + 1 : 11;
  }
}