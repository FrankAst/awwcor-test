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
    const dialogRef = this.dialog.open(CreateDepartmentComponent, {
      width: '400px',
      height: '270px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.departmentService.create(result).subscribe((newDepartment: Department) => {
        this.departments.push(newDepartment);
        this.departments.sort((a, b) => b.id - a.id);
      });
    });
  }

  ngOnInit() {
    this.departmentService
    .getAll()
    .subscribe((data: Department[]) => {
      this.departments = data.sort((a, b) => b.id - a.id);
    });
  }
}
