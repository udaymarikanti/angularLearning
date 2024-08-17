import { Component, Output, ViewChild } from '@angular/core';
import { SidenavbarComponent } from './shared/sidenavbar/sidenavbar.component';
import { UserregisterService } from './userregister.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangulardemo';

  constructor(private userregisterService:UserregisterService){

    this.userregisterService.userNameBehaviorSubject.subscribe(data=>{
      this.fromchaild=data;
      console.log("from app componet subcription")
    })
  }
  
  // @ViewChild('sidenav')
  // sidenav!: MatSidenav;

  // toggleSidenav() {
  //   this.sidenav.toggle();
  // }

  // @ViewChild(SidenavbarComponent)
  // sidenavbar!: SidenavbarComponent;

  // onToggleSidenav() {
  //   this.sidenavbar.toggleSidenav();
  // }
  fromchaild:string="";



}         
