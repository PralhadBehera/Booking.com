import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule,FilterComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
