import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Department } from '../department/Department';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<CreateDepartmentComponent>, @Inject(MAT_DIALOG_DATA) public data: Department) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }

}



