import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent{
  title = 'finalProject';

  position = {
    lat: -34.681,
    lng: -58.371
  };

  label = {
    color: 'red',
    text: '...'
  }
}

