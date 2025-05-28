import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports :[TableModule,FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit  {
[x: string]: any;


employees= [
  { name: 'Alice', position: 'Developer', salary: 50000 },
  { name: 'Raja', position: 'Designer', salary: 45000 },
  { name: 'Raju', position: 'Architecht', salary: 40000 },
  { name: 'Babu', position: 'Designer', salary: 35000 },
  { name: 'Alik', position: 'Developer', salary: 25000 },
  { name: 'Ranu', position: 'Designer', salary: 16000 },
  { name: 'Ram', position: 'Architecht', salary: 15000 },
  { name: 'Babloo', position: 'Designer', salary: 12000 }
];

highestSalary:any;

ngOnInit(){
  this.updatehighestSalary();
}
updatehighestSalary(){
  this.highestSalary = this.employees.reduce((prev, current) =>
    (prev.salary > current.salary) ? prev : current
  );
}

editingID: number | null = null;

editEmployee(index: number) {
  this.editingID = index;
}

saveEmployee() {
  this.editingID = null;
  this.updatehighestSalary();
}

deleteEmployee(index: number){
  this.employees.splice(index,1);
  this.updatehighestSalary();
}

}
