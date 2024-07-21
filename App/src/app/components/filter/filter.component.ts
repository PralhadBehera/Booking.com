  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { HotelListComponent } from 'src/app/hotel-list/hotel-list.component';

  @Component({
    selector: 'app-filter',
    standalone: true,
    imports: [CommonModule,CategoryComponent,HotelListComponent],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.css'
  })
  export class FilterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    
    }
    
    

  }
