import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';
import { TopComponent } from './top/top.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks.service';
import { ValueSharedService } from './value-shared.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  declarations: [ AppComponent, HeaderComponent, TopComponent, TasksComponent, DetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TasksService, ValueSharedService]
})
export class AppModule { }
