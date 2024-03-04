import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent implements OnInit {
  constructor(private userService: UserService){}
  users: {name: string, job: string, gender: string, country: string}[]=[];

ngOnInit(): void {
  this.users =this.userService.users;
}
ShowDetails(user:{name: string, job: string, gender: string, country: string}){
this.userService.ShowUserDetails(user);
}

}
