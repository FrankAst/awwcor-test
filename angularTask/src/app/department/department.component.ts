import { Component, OnInit, Input } from '@angular/core';
import { Department } from './Department';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {
  @Input()
  department: Department;
  constructor(private departmentService: DepartmentService) {}
  delete = (id: number): void => {
    this.departmentService.delete(id).subscribe((deleted: Department) => {
      console.log(deleted);
    });
  }
  ngOnInit() {}
}
