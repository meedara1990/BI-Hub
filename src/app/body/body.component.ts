import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {
  constructor(private userService: UserService) {}
  userProfile: any;
  ngOnInit(): void {
    this.userService.sendUserInfoEvent.subscribe((user: any) => {
      this.userProfile = user;
    });
  }
}
