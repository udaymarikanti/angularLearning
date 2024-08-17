import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UserregisterService } from '../../userregister.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private service:UserregisterService){}

 toggleSidenav() {
   this.service.toggle();
 }

}
