import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  message:string
  users:string[]
  employees:EMployee[]
  valid:boolean
  constructor() { }

  ngOnInit() {
    this.message="running angular project";
    this.users=[
      'abc',
      'def',
      'ghi'
    ];
    this.employees=[
      {
      id:1,
      name:'Adam',
      email:'adam@gg'
    },
  {
    id:2,
    name:'Bob',
    email: 'bob@gg'
  }
]
this.valid=true;
  }
}

interface EMployee{
id:number,
name:string,
email:string
}  