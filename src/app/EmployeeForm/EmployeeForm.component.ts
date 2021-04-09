import { Component } from '@angular/core';
import { DataService } from '../Data/DataService.service';
import { Router } from '@angular/router';
import { EmployeeData } from '../Data/EmployeeData';
import { NgModel } from '@angular/forms';

@Component({
  templateUrl: './EmployeeForm.component.html',
  styleUrls: ['./EmployeeForm.component.css']
})
export class EmployeeFormComponent {

  firstname:string;
  lastname:string;
  emailid:string;
    contactnumber:number;
    address:string;
    username:string;
    password:string;
    gender:string;
    Qualification:string;
    Experience:string;
    empl: EmployeeData;


  constructor(private Service: DataService, private rout: Router) {}
  ID(): string
   {
    var content: string;
    var allow = "0123456789";
    for (var i = 0; i < 10; i++)
    {content += allow.charAt(Math.floor(Math.random() * allow.length));}
    return content;
  }
  onBlur(field: NgModel){
    console.log("in onBlur" ,field.valid);

  }
  onSubmitEmployee(){
    this.empl = new EmployeeData(this.ID(), this.firstname,this.lastname,this.emailid, this.contactnumber , this.address,
    this.username ,this.password,this.gender,this.Qualification,this.Experience);
    this.Service.addEmp(this.empl);
    this.rout.navigate(["Employees"]);
  }


}
