import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';

import { FormsModule } from '@angular/forms';
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaskDirective } from './mask.directive';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; 
import { SidenavbarComponent } from './shared/sidenavbar/sidenavbar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RatingComponent } from './rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    MaskDirective,
    SidenavbarComponent,
    NavbarComponent,
    AddressComponent,
    UserComponent,
    AddRestaurantComponent,
    RatingComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,


    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,  
    MatSlideToggleModule
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  