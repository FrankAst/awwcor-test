import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  baseUri = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com';

  getAll() {
    return this.http.get<Department[]>(this.baseUri + '/users/departments/');
  }

  getById(id: number) {
    const uri = '';
    return this.http.get<Department>(uri + '/' + id);
  }

  create(department: Department) {
    return this.http.post<Department>(this.baseUri + '/users/departments/', department);
  }

  delete(id: number) {
    return this.http.delete<Department>(this.baseUri + '/users/departments/' + id);
  }
}
