import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path : '', component : AppComponent },
//   { path: 'users', component: DepartmentComponent },
];

export const routing = RouterModule.forRoot(routes);
