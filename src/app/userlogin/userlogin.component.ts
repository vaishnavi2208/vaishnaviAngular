import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, NgForm, FormBuilder, EmailValidator } from '@angular/forms';
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  angForm:FormGroup;
  
  constructor(private fb: FormBuilder, private dataservice : ApiService ,private router: Router) {

    this.angForm = this.fb.group({
      email : ['',[Validators.required, Validators.minLength(1), Validators.email]],
      password:['',Validators.required]
    });
   }

  ngOnInit(): void {

  }
postdata(angForm){
  this.dataservice.userlogin(angForm.value.email,angForm.value.password)
.pipe(first())
.subscribe(data => {
  const redirect = this.dataservice.redirectUrl ? this.dataservice.redirectUrl : '/dashbord';
  this.router.navigate([redirect]);
},
error => {
  alert("user name or password is incorrect")
});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); };
}
