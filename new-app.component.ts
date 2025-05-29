import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-new-app',
  imports: [CommonModule, FormsModule, PopupComponent],
  templateUrl: './new-app.component.html',
  styleUrl: './new-app.component.css',
  standalone: true
})
export class NewAppComponent {
  username: string = '';
  password: string='';
  showPopup: boolean = false;

  onLogin() {
    this.showPopup = true;
  }
}
