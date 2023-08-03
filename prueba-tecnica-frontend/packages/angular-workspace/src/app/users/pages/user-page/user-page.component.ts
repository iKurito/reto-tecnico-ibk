import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.sass']
})
export class UserPageComponent implements OnInit {
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
