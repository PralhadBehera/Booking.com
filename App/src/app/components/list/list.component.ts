import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestinomialComponent } from '../testinomial/testinomial.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,TestinomialComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
