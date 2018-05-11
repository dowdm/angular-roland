import { Component, OnInit } from '@angular/core';
import { Registry } from '../models/registry.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 register=false;
 userProductArray: Registry [] =[];

 regProduct(){
   this.register=true;
   return this.register;
 }

 submitRegister(serial: string, date: string, email: string, place: string){
   let userProduct: Registry = new Registry (serial, date, email, place);
   this.userProductArray.push(userProduct)
   this.register=false;
   console.log(this.userProductArray);
 }

  constructor() { }



  ngOnInit() {
  }

}
