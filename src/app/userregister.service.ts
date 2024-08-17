import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';


@Injectable({
  providedIn: 'root'
})
export class UserregisterService {


  userNameBehaviorSubject= new BehaviorSubject<string>("neoteric");

  emiteName(name:any):void{
    this.userNameBehaviorSubject.next(name);
  }


  constructor(private httpClient:HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/registerUser';

  private httpOptions = {
    headers: new HttpHeaders({
      'companeyname':'Neoteric',
      'Content-Type':  'application/json',
      'Accept': 'application/json'
      
    })
  }



  register(user:any):Observable<Object>{

    var responce =this.httpClient.post(this.apiUrl,user,this.httpOptions)
    console.log("hello from the service")
    return responce;

  }



  learnObervable() : Observable<string>{

    return new Observable<string>( observer =>{

   console.log("observer execution ");

   setTimeout(()=>observer.next("uday kiran"),6000);
   });

  //  observer.next("form customer observable");

  }

  // postData(user: any): Observable<any> {
  //   return this.httpClient.post<any>(this.apiUrl, user,this.httpOptions);
  // }


  private sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  public toggle(): void {
    this.sidenav.toggle();
  }


}
