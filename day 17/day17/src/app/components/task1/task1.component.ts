import { Component } from '@angular/core';
import { Category } from '../../models/Category';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [
     CommonModule, FormsModule
  ],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {
  selectedCategory: Category | null;
  user: User;
  people: User[];
  submitted = false;


  constructor() {
    this.user = { name: '', age: null }
    this.selectedCategory = null;
    this.people = [];
  }
  categories: Category[] = [{
    track: 'Angular',
    available: true,
    locations: ['Cairo', 'Alexandria', 'Aswan'],
  },
  {
    track: 'React',
    available: true,
    locations: ['Cairo', 'Alexandria'],
  },
  {
    track: 'NodeJS',
    available: true,
    locations: ['Cairo', 'Alexandria', 'Aswan', 'Luxor'],
  },
  {
    track: 'Flutter',
    available: false,
  }

  ];



  addPerson() {
    this.submitted = true;

    if (!this.user.name || this.user.age === null) {
      return;
    }

    this.people.push({ name: this.user.name, age: this.user.age });
    this.user = { name: '', age: null };
    this.submitted = false;
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
  }
}
