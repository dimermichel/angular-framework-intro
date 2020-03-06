import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-framework-intro';
  name = 'Michel';
  message = '';
  elements: number[] = [];

  onChangeName() {
    if (this.name === 'Michel') this.name = 'Michel Maia'
    else this.name = 'Michel'
  }

  onAddElement() {
    this.elements.push(this.elements.length + 1);
  }

  getColor(element: number) {
    return element % 2 === 0 ? 'green' : 'red';
  }

  onUserWasClicked(userName: string) {
    alert(userName);        
  }
}
