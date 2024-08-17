import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  subject = new Subject<string>();



  constructor(private userregisterService:UserregisterService){
this.subject.subscribe(data =>{
  console.log("data from the subject subceribe: "+data);
});
console.log("from The contructor :")
  }


companey : string="";

@Output() 
usernameEmitter: EventEmitter<string>= new EventEmitter();



userDetails ={
  name: '',
  email: '',
  address: '',
  mobile: '',
  age: null,
  gender: ''

};



registor(form:any): void{


  this.userregisterService.emiteName(this.userDetails.name);
  this.subject.next("testing the subject scription angular "+this.userDetails.name);

  this.subject.next("from the testing excuted 2222222");
  this.subject.next("from the testing the 33333")

  this.usernameEmitter.emit(this.userDetails.name);

this.userregisterService.learnObervable().subscribe(

data=>{    
console.log("from coustom observable subcription ")
this.companey = data;

},
error=>{
console.log("error ")
}
);



  
   //console.log(" registation in progress",JSON.stringify(this.userDetails));

   var responce = this.userregisterService.register(this.userDetails);
   responce.subscribe(responce=>{
    console.log("from subscribe of avalable");
   },
   error=>{
    console.log("registaion in profress");
   }
  );
     console.log("saved sucefully "+JSON.stringify(this.userDetails)+ "responce "+responce);

  // this.userregisterService.register(this.userDetails).subscribe(response=>{
  //   console.log("saved sucefully "+JSON.stringify(response))
  // })
  // }
// console.log("from component ")



}
// registerUser(): void {
//   this.userRegisterService.register(this.user).subscribe(
//     response => {
//       console.log('Registration successful', response);
//       alert('Registration successful');
//     },
//     error => {
//       console.error('Registration failed', error);
//       alert('Registration failed');
//     }
//   );
}

