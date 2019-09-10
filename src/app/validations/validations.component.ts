import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { dateValidator } from '../Validators/dateVlaidation'
import { emailValidator } from '../Validators/emailValidators'
import {  NgxSpinnerService} from "ngx-spinner";
// import {FormsModule, ReactiveFormsModule,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {
  public reservation = Array();

  //dropdown values of roomtype

  public rooms = ["Single Person", "Two Person", "Family"];
  public reservationForm: FormGroup;

  //here we used our ngx-spinner to initiate in our consturctor

  constructor(private spinner: NgxSpinnerService) {
    this.reservationForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      //name validation
      name: new FormControl("", [Validators.required]),
      //email validation emailValidator defined in  validator folder
      email: new FormControl("", [Validators.required,emailValidator]),
      //Pickup validation
      pickup: new FormControl("", [Validators.required]),
      //room type
      roomtype: new FormControl("", [Validators.required]),
      //arrival date dateValidator defined in validators folder
      arrivalDate: new FormControl("", [Validators.required, dateValidator]),
      //flight No
      flightno: new FormControl("", [Validators.required]),
      // Request validation
      request: new FormControl("", [Validators.required]),
      //Guest No
      guests: new FormControl("", [Validators.required])
    });
  }

  // Getting Values
  get name() {
    return this.reservationForm.get("name");
  }
  get email() {
    return this.reservationForm.get("email");
  }
  get pickup() {
    return this.reservationForm.get("pickup");
  }
  get roomtype() {
    return this.reservationForm.get("roomtype");
  }
  get flightno() {
    return this.reservationForm.get("flightno");
  }
  get request() {
    return this.reservationForm.get("request");
  }
  get guests() {
    return this.reservationForm.get("guests");
  }
  get arrivalDate() {
    return this.reservationForm.get("arrivalDate");
  }

//Reset form

revert() {
    this.reservationForm.reset();
}

  // Save Reservation

  onSubmit(){
    this.reservation.push(this.reservationForm.value)
    this.revert()
  }


//Update Reservation

  onUpdate(index){

      this.reservation[index]=this.reservationForm.value
      this.revert()
  }

  //delete Reservation

  onDelete(index){
    this.reservation.splice(index,1);
    this.revert()
  }

  //Edit reservation

  onEdit(index){
      this.reservationForm.get('name').setValue(this.reservation[index].name);
      this.reservationForm.get('email').setValue(this.reservation[index].email);
      this.reservationForm.get('pickup').setValue(this.reservation[index].pickup);
      this.reservationForm.get('roomtype').setValue(this.reservation[index].roomtype);
      this.reservationForm.get('flightno').setValue(this.reservation[index].flightno);
      this.reservationForm.get('request').setValue(this.reservation[index].request);
      this.reservationForm.get('guests').setValue(this.reservation[index].guests);
      this.reservationForm.get('arrivalDate').setValue(this.reservation[index].arrivalDate);
  }
  ngOnInit() {
    // spinner time to show and hinde after 2 sec it will take us to our page
    this.spinner.show();
      setTimeout(() => {
          this.spinner.hide();
      }, 3000);
  }
}
