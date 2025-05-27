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

employees = [
  { name: 'Alice', position: 'Developer', salary: 50000 },
  { name: 'Raja', position: 'Designer', salary: 45000 },
  { name: 'Raju', position: 'Architecht', salary: 40000 },
  { name: 'Babu', position: 'Designer', salary: 35000 }
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

editEmployee(index:number){
  this.updatehighestSalary();
}
deleteEmployee(index: number){
  this.employees.splice(index,1);
  this.updatehighestSalary();
}

}
