import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.showLocalStorage();
  }

  getLocalStorage() {
    let name = localStorage.getItem('nombre');
    let user = JSON.parse(localStorage.getItem('usuario') || '{}');

    console.log(name);
    console.log(user);
  }

  showLocalStorage() {
    let name: string = 'Fernando';

    let user = {
      name: 'Juan',
      age: 18,
      coords: {
        lat: 10,
        lng: -10
      }
    };

    localStorage.setItem('nombre', name);
    localStorage.setItem('usuario', JSON.stringify(user));
  }

}
