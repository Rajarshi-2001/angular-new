import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  imports:[FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  standalone:true
})
export class PopupComponent {
   @Input() username!:string ;
   @Input() password!: string;
   @Output() cl= new EventEmitter<void>();
   onclose(){
    this.cl.emit();
   }
}

