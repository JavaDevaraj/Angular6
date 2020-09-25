import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentComponent } from './department/department.component';
import { EmpolyeeDetailsComponent } from './empolyee-details/empolyee-details.component';
import { EmpolyeeListComponent } from './empolyee-list/empolyee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "", redirectTo : '/departments', pathMatch:'full'}, /* Default Home page */
  {
    path : 'departments', 
    component : DepartmentComponent,
    children : [
                { path: 'overview', component : DepartmentOverviewComponent},
                { path: 'contact', component : DepartmentContactComponent}  
              ]
    },
  {path : 'employees', component : EmpolyeeListComponent},
  {path : 'employeedetails/:id', component : EmpolyeeDetailsComponent},
  {path : 'employeedetails', component : EmpolyeeDetailsComponent},
  {path : "**", component : PageNotFoundComponent} /* If any url not found page */
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponent = [ DepartmentComponent, 
                                  EmpolyeeDetailsComponent, 
                                  EmpolyeeListComponent, 
                                  PageNotFoundComponent,
                                DepartmentContactComponent,
                              DepartmentOverviewComponent];

