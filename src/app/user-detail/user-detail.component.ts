import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  constructor(private userService: UserService){ }
  user: { name: string; job: string; gender: string; country: string; } | undefined;
  
  ngOnInit(): void {
    this.userService.onShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string})=>{
      this.user=data;
    })
    
  }


}
