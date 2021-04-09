import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import { AppComponent } from './app.component';
import { EmployeeShowComponent } from './EmployeeShow/EmployeeShow.component';
import { EmployeeFormComponent } from './EmployeeForm/EmployeeForm.component';
import { EmployeeEditComponent } from './EmployeeEdit/EmployeeEdit.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeNewComponent } from './EmployeeNew/EmployeeNew.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

const routes: Routes = [
  { path:"Employees", component:EmployeeNewComponent },
  { path:"AddEmployee", component:EmployeeFormComponent },
  { path:"EditEmployee/:id", component:EmployeeEditComponent },
  { path:"**", redirectTo:'AddEmployee' },
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeShowComponent,
    EmployeeFormComponent,
    EmployeeEditComponent,
    EmployeeNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    CardModule,
    InputTextModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
