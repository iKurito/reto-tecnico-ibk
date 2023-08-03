import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.sass']
})
export class EditUserPageComponent implements OnInit {
  public user?: User;
  public uid: string = '';

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => {
        this.uid = id;
        return this.usersService.getUserById(id);
      }))
      .subscribe(user => {
        if (!user) return this.router.navigate(['/users/list']);
        this.user = user;
        this.uid = user.uid
        return;
      });
  }

}
