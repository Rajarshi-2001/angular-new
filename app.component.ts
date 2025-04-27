import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewAppComponent } from './new-app/new-app.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports:[RouterOutlet,NewAppComponent,FormsModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
