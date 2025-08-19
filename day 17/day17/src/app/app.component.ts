import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Category } from './models/Category';
import { User } from './models/User';
import { Task1Component } from './components/task1/task1.component';
import { HomeComponent } from './components/home/home.component';
import { Task2Component } from './components/task2/task2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Task1Component,Task2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
