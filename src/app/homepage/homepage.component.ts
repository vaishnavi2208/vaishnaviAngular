import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import { Products} from '../products';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

produts: Products[]=[]
  
  constructor(private dataservice : ApiService ,private router: Router) {  
    
  }  
  ngOnInit(): void {
  }

  addtocart(){
    alert("product added");
this.dataservice.saveData(this.produts.values).subscribe((res)=>{
  
})

  }

  deletefromcart(){
    this.dataservice.deleteData(this.produts.values).subscribe((res)=>{
      alert("product deleted successfully");
  })

}
}
