
import { IEmployeeDetail } from '../employeeDetail';
import { EmpolyeeServiceService } from '../empolyee-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'empolyee-details',
  templateUrl: './empolyee-details.component.html',
  styleUrls: ['./empolyee-details.component.css']
})
export class EmpolyeeDetailsComponent implements OnInit {

  constructor(private _empolyeeService:EmpolyeeServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let empId= parseInt(this.route.snapshot.paramMap.get("id"));
    
    this.empolyeeId = empId;
    console.log("Emp Id", empId);
   
   this._empolyeeService.getEmpolyeeDetailById(empId).subscribe(data => this.employeeDetail = data,
    error => this.errorMessage = error);
    
   }
  public empolyeeId;
  public employeeDetail: IEmployeeDetail;
  public errorMessage;
  public blankSpace = "&nbsp;&nbsp;";
  gotoEmployeeList(){
    this.router.navigate(['/employees', {id: this.empolyeeId}]);
    
  }
}
