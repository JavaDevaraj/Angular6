import { EmpolyeeServiceService } from '../empolyee-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'empolyee-list',
  templateUrl: './empolyee-list.component.html',
  styleUrls: ['./empolyee-list.component.css']
})
export class EmpolyeeListComponent implements OnInit {
  
  public employees = [];
  public errorMessage;
  public selectedId;
  public hasSelected:boolean;

  constructor(private _empolyeeService:EmpolyeeServiceService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this._empolyeeService.getEmpolyees().subscribe(data => this.employees = data,
     error => this.errorMessage = error);
    
    this.selectedId= parseInt(this.route.snapshot.paramMap.get("id"));
    if(isNaN(this.selectedId)){
      this.hasSelected=false;
    } else {
       this.hasSelected=true;
    }
    console.log("selectId", this.hasSelected);
  }
  
  onSelectedEmployee(employee){
    this.router.navigate(['/employeedetails', employee.id]);
  }
  
  public isSelected(emp){
    console.log(this.selectedId +"- "+ emp.id +"=="+(this.selectedId == emp.id) )
    return (this.selectedId == emp.id);
  }
  

}
