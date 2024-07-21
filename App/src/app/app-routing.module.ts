import {
  Routes,
} from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { ProfileComponent } from './pages/profile/profile.component';
// import { ExternalApiComponent } from './pages/external-api/external-api.component';
// import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home-upper/home-upper.component';
import { SearchComponent } from './components/search/search.component'
import { authGuardFn } from '@auth0/auth0-angular';
import { FilterComponent } from './components/filter/filter.component';

export const routes: Routes = [
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [authGuardFn],
  // },
  // {
  //   path: 'external-api',
  //   component: ExternalApiComponent,
  //   canActivate: [authGuardFn],
  // },
  // {
  //   path: 'error',
  //   component: ErrorComponent,
  // },
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full',
  // },
    {
    path: 'search',
    component: SearchComponent,
  },
 {
 path:'home',
 component:HomeComponent
 },
  {
    path:'',
    component:HomeComponent
  },
  {
 path:'filter',
 component:FilterComponent
  }
];
