import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="";
  displayName="";
  
  getName(evt: Event){
    const name=(evt.target as HTMLInputElement).value;
  
    this.name=name;
    
  }

  showName(){
    this.displayName=this.name;
  }
}