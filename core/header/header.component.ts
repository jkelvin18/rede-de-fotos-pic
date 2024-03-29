import { UserService } from './../user/user.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$: Observable<User>;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
  }

}
