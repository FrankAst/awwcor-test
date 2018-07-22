import { Component, OnInit } from '@angular/core';
import { Department } from './department/Department';
import { DepartmentService } from './department/department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Dashboard';
  departments: Department[];
  constructor(private departmentService: DepartmentService) {}
  ngOnInit() {
    this.departmentService
    .getAll()
    .subscribe((data: Department[]) => {
      this.departments = data;
        });
      }
}
