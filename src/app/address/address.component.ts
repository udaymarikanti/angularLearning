import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '../model/Address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  // address={
  //   add1:'',
  //   add2:'',
  //   pincode:'',
  //   state:'',
  //   city:''
 // }


  @Input() address: Address= new Address('','','','','')
  @Output() addressChange = new EventEmitter<Address>();


  onAddressChange() {
    this.addressChange.emit(this.address);
  }

}
