import { DepartmentService } from '../department.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

 public departments = [];
  public errorMessage;
  public blankSpace = "&nbsp;&nbsp;";
  
  constructor(private _deptService : DepartmentService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this._deptService.getDepartments().subscribe(data => this.departments = data,
     error => this.errorMessage = error);
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo : this.activeRoute});
  }
  
  showContact() {
    this.router.navigate(['contact'], {relativeTo : this.activeRoute});
  }

}
