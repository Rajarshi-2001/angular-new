import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

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
  constructor (private router:Router){};
  onLogin() {
    if(this.username== "admin" && this.password=="admin"){
      this.showPopup = true;
      this.router.navigate(["./dashboard"]);
    }else {
      alert('Invalid username or password!');
      this.showPopup = false;
    }
    
    
  }
  Logout(){
    this.showPopup= false;
  }
}
