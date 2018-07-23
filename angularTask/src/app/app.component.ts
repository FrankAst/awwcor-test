import { Component, OnInit } from '@angular/core';
import { Department } from './department/Department';
import { DepartmentService } from './department/department.service';
import { MatDialog } from '@angular/material';
import { CreateDepartmentComponent } from './create-department/create-department.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  departments: Department[];
  constructor(private departmentService: DepartmentService, public dialog: MatDialog) {}

  openDialog(): void {
    console.log('aallalaalal');
    const dialogRef = this.dialog.open(CreateDepartmentComponent, {
      width: '250px',
      data: {name: 'sdcsdc'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  ngOnInit() {
    this.departmentService
    .getAll()
    .subscribe((data: Department[]) => {
      this.departments = data;
        });
      }
}
