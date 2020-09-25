import { IDepartment } from './department';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }
  
 getDepartments(): Observable<IDepartment[]> {
   return this.httpClient.get<IDepartment[]>("http://localhost:9092/departmentList").catch(this.errorHandler);
  }
  
  errorHandler(error: HttpErrorResponse) {
    console.log("Kumar - "+error.message);
    return Observable.throw(error.message || "Server Error");
  }
  
  

}
