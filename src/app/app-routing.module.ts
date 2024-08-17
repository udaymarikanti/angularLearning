import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AboutComponent } from './home/about/about.component';
import { ServiceComponent } from './home/service/service.component';
import { HomeComponent } from './home/home.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path:"template", component:TemplateDrivenComponentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  {path:'addResaturant', component: AddRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
