import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserloginComponent } from './userlogin/userlogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthguardGuard } from './authguard.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


const routes: Routes = [
{ path: '', component: HomepageComponent  },
{ path: 'login', component: UserloginComponent },
{ path: 'home', component: HomepageComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'dashboard', component: DashbordComponent,canActivate: [AuthguardGuard] },
{ path: 'adminlogin', component: AdminloginComponent },

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }