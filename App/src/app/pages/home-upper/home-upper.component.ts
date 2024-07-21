import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from '../../components/feature/feature.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-upper',
  standalone: true,
  imports: [CommonModule,FeatureComponent,PricingComponent,ListComponent,RouterOutlet, RouterModule],
  templateUrl: './home-upper.component.html',
  styleUrl: './home-upper.component.css'
})
export class HomeComponent {

}
