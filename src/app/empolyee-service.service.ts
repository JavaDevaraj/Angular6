import { IEmployee} from './employee';
import { IEmployeeDetail } from './employeeDetail';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmpolyeeServiceService {
  
  

  constructor(private httpClient: HttpClient) { }
  
 
  
  getEmpolyees(): Observable<IEmployee[]> {
   return this.httpClient.get<IEmployee[]>("http://localhost:9092/employees").catch(this.errorHandler);
  }
  
  errorHandler(error: HttpErrorResponse) {
    console.log("Kumar - "+error.message);
    return Observable.throw(error.message || "Server Error");
  }
  
  getEmpolyeeDetailById(empId) : Observable<IEmployeeDetail> {
    return this.httpClient.get<IEmployeeDetail>("http://localhost:9092/employeedetails/"+empId).catch(this.errorHandler);
  }

}
