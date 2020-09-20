import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Admin } from './admin'
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  form: FormGroup
  admin:string="admin123";
  password:number=1234;

  constructor() { }

  ngOnInit(): void {
  }
login(){
  window.alert("welcome admin!!!");
}
}
