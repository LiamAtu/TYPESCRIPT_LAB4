import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  //VARIABLES
  name:string="Liam";
  count:number =0;
  myBool:boolean = true;
  
  //METHOD THAT INCREMENTS COUNTER ON BUTTON CLICK
  onButtonClicked()
  {
    this.count++;
  }
  //METHOD THAT SHOWS AND HIDES H2 ELEMENT ON DBL CLICK
  onDoubleClicked()
  {
    if(!this.myBool)
    {
      this.myBool=true;
    }
    else
    {
      this.myBool=false;
    }
      
  }
}
