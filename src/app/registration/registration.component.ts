import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-registration]',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageName: string = "Registration Page";
  public dangerStyle="text-danger";
  public hasError=true;
  public isSpecial=true;
  public specialStyle="text-special";
  public successStyle="text-success";
  public highLightColor="orange";
  
  public greetUser():string  {
    return "Testing data";
  }
  
  public titleStyles= {
    color: "blue",
    fontStyle:"italic"
    
  }
  
  public messageClasses =  {
    "text-special":this.isSpecial,
    "text-success": !this.hasError,
    "text-danger" : this.hasError
    
  }
  
  onClick() {
    console.log("Welcome to Greeting world");
    this.greetingMessage="Thanks For Joining";
  }
  
   onClickTest(event) {
    console.log(event);
    this.greetingMessage="Again Thanks For Joining";
  }
  
  public greetingMessage:string="Greet";
  
  logMessage(value) {
    console.log(value);
  }
  
  public userName:string = "Kumar Here";
}
