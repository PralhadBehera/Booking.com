import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-testinomial',
  standalone: true,
  imports: [CommonModule,FooterComponent],
  templateUrl: './testinomial.component.html',
  styleUrl: './testinomial.component.css'
})
export class TestinomialComponent {

}
