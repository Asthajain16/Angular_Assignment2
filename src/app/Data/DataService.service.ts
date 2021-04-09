import { Injectable } from '@angular/core';
import { EmployeeData } from './EmployeeData';

@Injectable({
  providedIn:'root'
})
export class DataService {

  Show:EmployeeData[]=[];


  Shows():EmployeeData[]{return this.Show;}

  getEmp(id:string):EmployeeData{
    return this.Show.find(emp => emp.id == id);
  }

  delEmp(id:string)
  {
    this.Show = this.Show.filter(employee => employee.id != id);
  }

  EmpUp(employee:EmployeeData)
  {
    var Emp_u = this.Show.find(emp => emp.id == employee.id);
    Emp_u.firstname = employee.firstname;
    Emp_u.lastname = employee.lastname;
    Emp_u.emailid = employee.emailid;
    Emp_u.contactnumber = employee.contactnumber;
    Emp_u.address = employee.address;
    Emp_u.username = employee.username;
    Emp_u.password = employee.password;
    Emp_u.gender = employee.gender;
    Emp_u.Qualification = employee.Qualification;
    Emp_u.Experience = employee.Experience;
  }

  addEmp(employee:EmployeeData)
  {
    this.Show.push(employee)
  }




}
