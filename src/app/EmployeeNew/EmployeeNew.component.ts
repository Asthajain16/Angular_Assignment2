import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data/DataService.service';
import { Router } from '@angular/router';
import { EmployeeData } from '../Data/EmployeeData';

@Component({
  selector: 'app-employeelist',
  templateUrl: './EmployeeNew.component.html'
})
export class EmployeeNewComponent implements OnInit {
  _listFilterBy: string;
  allEmployees: EmployeeData[];
  filteredList: EmployeeData[];


  constructor(private employeeService:DataService, private router: Router) { }

  get listFilterBy(): string {
    return this._listFilterBy;
  }

  set listFilterBy(value: string) {
    this._listFilterBy = value;
    this.filteredList = this._listFilterBy ? this.performFilter(this._listFilterBy) : this.allEmployees;
  }


  performFilter(filterBy: string): EmployeeData[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allEmployees.filter((employee: EmployeeData) => employee.firstname.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
     employee.lastname.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  ngOnInit() {
    this.allEmployees = this.employeeService.Shows();
    this.filteredList = this.allEmployees;
    this._listFilterBy = "";
  }


  addEmp(){
    this.router.navigate(["AddEmployee"]);
  }


  ListRef(){
    this.allEmployees = this.employeeService.Shows();
    this.filteredList = this.allEmployees;
  }
}
