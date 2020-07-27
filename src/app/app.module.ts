import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';
import { FooterComponent } from './footer/footer.component';
import { TopComponent } from './top/top.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { TasksService } from './tasks.service';

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
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, TopComponent, TasksComponent, AddComponent, ListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TasksService]
})
export class AppModule { }
