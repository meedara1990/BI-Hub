import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  constructor(private userService: UserService) {}
  userProfile: any;
  ngOnInit(): void {
    this.subscription = this.userService.profileItem$.subscribe(
      (user) => (this.userProfile = user)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
