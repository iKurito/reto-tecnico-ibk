import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { RecordsPageComponent } from './pages/records-page/records-page.component';
import { CommitsPageComponent } from './pages/commits-page/commits-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'commits', component: CommitsPageComponent },
      { path: 'records', component: RecordsPageComponent },
      { path: 'new-user', component: NewUserPageComponent },
      { path: 'edit/:id', component: EditUserPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: UserPageComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
