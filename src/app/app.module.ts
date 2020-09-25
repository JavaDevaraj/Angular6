import { AppRoutingModule, routingComponent } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DepartmentService } from './department.service';
import { RegistrationComponent } from './registration/registration.component';
import { StructuraltestComponent } from './structuraltest/structuraltest.component';
import { EmpolyeeServiceService } from './empolyee-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StructuraltestComponent,
    routingComponent,
    PageNotFoundComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmpolyeeServiceService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
