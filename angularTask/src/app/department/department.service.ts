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

  create(user: Department) {
    const uri = '';
    return this.http.post(uri, user);
  }

  delete(id: number) {
    const uri = '';
    return this.http.delete(uri);
  }
}
