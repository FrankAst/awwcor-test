import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentService } from './department/department.service';
import { routing } from './app.routing';
import { CreateDepartmentComponent } from './create-department/create-department.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    CreateDepartmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    routing,
    HttpClientModule
  ],
  entryComponents: [CreateDepartmentComponent],
  providers: [DepartmentService, CreateDepartmentComponent],
  bootstrap: [AppComponent, ]
})

export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('delete', domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/baseline-delete-24px.svg'));
}
}
