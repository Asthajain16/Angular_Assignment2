import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../Data/DataService.service';
import { Router } from '@angular/router';
import { EmployeeData } from '../Data/EmployeeData';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './EmployeeShow.component.html'
})
export class EmployeeShowComponent {


  @Input() employee: EmployeeData;
  @Output() refreshEmployeeList: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private Service: DataService, private router: Router) {}

  editEmp(){
    this.router.navigate(["EditEmployee/"+ this.employee.id]);
  }


  delEmp(employeeToBeDeleted: EmployeeData){
    var res = confirm("Are you sure you want to delete this Employee?");
    if (res)
    {
      this.Service.delEmp(this.employee.id);
      this.refreshEmployeeList.emit(true);
      this.router.navigate(["Employees"]);
    }
  }
}
