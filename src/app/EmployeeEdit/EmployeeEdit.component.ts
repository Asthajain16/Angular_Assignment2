import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeData } from '../Data/EmployeeData';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Data/DataService.service';
import { Router } from '@angular/router/';
import { NgModel } from '@angular/forms';

@Component({
  templateUrl: './EmployeeEdit.component.html'})
export class EmployeeEditComponent implements OnInit {

  empl: EmployeeData;
  constructor(private Service: DataService, private route: ActivatedRoute, private router: Router) { }
  onBlur(field: NgModel)
  {
    console.log("in onBlur" ,field.valid);
  }
  ngOnInit(){
    var id = this.route.snapshot.params["id"];
    this.empl = this.Service.getEmp(id);
  }

  EmpUp()
  {
    this.Service.EmpUp(this.empl);
    this.router.navigate(["Employees"]);
  }


}
