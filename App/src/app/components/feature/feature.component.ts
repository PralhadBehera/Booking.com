import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule,PricingComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

}
