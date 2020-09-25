import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraltest',
  templateUrl: './structuraltest.component.html',
  styleUrls: ['./structuraltest.component.css']
})
export class StructuraltestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  dispalyName = false;
  public color="fff";
  
  public colors = ["red", "blue", "green", "white"];

}
