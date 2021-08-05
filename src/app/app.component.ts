import { Component } from '@angular/core';
import { Vouncher } from './print/print.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vouncher: Vouncher = new Vouncher([], 0, 0, 0);
}
