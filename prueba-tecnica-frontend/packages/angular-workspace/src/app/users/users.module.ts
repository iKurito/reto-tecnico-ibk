import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';


@NgModule({
  declarations: [
    EditUserPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewUserPageComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
