import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { WeddingParticipentsData } from 'src/app/models/wedding-participents-data.model';
import { AppHelpers } from 'src/app/helpers/app-helpers.functions';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RsvpServiceService } from 'src/app/rsvp-service.service';

enum RSVPStatusEnum {
  Accept = 'Accept',
  Decline = 'Decline'
}

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  // @Input() public userData = new WeddingParticipentsData();
  @Input() public isMobileView = false;

  @Output() public navigateToErrorScreenEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public updateUserDataEmit: EventEmitter<any> = new EventEmitter<any>();

  public countValue = 10;
  public dataArray = [{ id: 0, name: '' }];
  public displayCaptureRSVP = false;
  public rsvpStatus = '';
  public plusOneRsvpStatus = '';
  public nightsAccommodation = '';
  public displayErrorMessage = false;
  public isLoading = false;
  public rsvpFormGroup: FormGroup;
  public searchErrorMessage = '';
  public selectedUserDetails: WeddingParticipentsData;
  public submitErrorMessage = '';
  public displayRsvpStatusPage = false;
  public allUserData: Array<WeddingParticipentsData>;
  public getAllUsersErrorMessage = '';

  constructor(public http: HttpClient, public formBuilder: FormBuilder, public rsvpService: RsvpServiceService) { }

  ngOnInit(): void {
    // if (!this.userData.firstName || !this.userData.lastName) {
    //   this.navigateToErrorScreenEmit.emit({ errorHeader: 'No user found', errorMessage: 'Something went wrong, no user could be found.' });
    // } else {
    //   if (this.userData.firstName.includes('johanjr')) {
    //     this.userData.firstName = 'johan';
    //   }
    // }

    this.rsvpFormGroup = this.formBuilder.group({
      nameControl: new FormControl(),
      surnameControl: new FormControl(),
    });
  }

  public searchUser() {
    this.rsvpService.searchUser(this.nameControl.value, this.surnameControl.value).then(result => {
      console.log('SEARCH RESULT: ', result);
      if (result?.length > 0)
      {
        this.searchErrorMessage = '';
        this.selectedUserDetails = result[0];
        this.rsvpStatus = this.selectedUserDetails.rsvpStatus;
        this.plusOneRsvpStatus = this.selectedUserDetails.plusOneRSVStatus
      } else {
        this.searchErrorMessage = 'Guest not found. Please ensure name and surname is correct.'
      }
    }).catch((error) => {
        this.searchErrorMessage = 'Guest not found. Please ensure name and surname is correct.'
    })
  }

  public submitRSVPStatus() {
    this.rsvpService.updateUser(this.selectedUserDetails.id, this.rsvpStatus, this.plusOneRsvpStatus).then(result => {
      if (result?.length > 0) {
        this.selectedUserDetails = result[0];
        this.displayCaptureRSVP = false;
      } else {
        this.submitErrorMessage = 'There was an issue submitting your RSVP. Please contact Andre or Ellouise.'
      }
    }).catch(error => {
      this.submitErrorMessage = 'There was an issue submitting your RSVP. Please contact Andre or Ellouise.'
    });
  }

  public displayRSVPStatus() {
    this.rsvpService.getAllUsers().then(result => {
      console.log('SEARCH RESULT: ', result);
      if (result?.length > 0)
      {
        this.getAllUsersErrorMessage = '';
        this.allUserData = result;
        this.displayRsvpStatusPage = true;
      } else {
        this.getAllUsersErrorMessage = 'An error has occured fething all the user data.'
      }
    }).catch((error) => {
        this.getAllUsersErrorMessage = 'An error has occured fething all the user data.'
    })
  }

  public hideRSVPStatus() {
    this.displayRsvpStatusPage = false;
  }

  public get nameControl() {
    return this.rsvpFormGroup.get('nameControl');
  }
  public get surnameControl() {
    return this.rsvpFormGroup.get('surnameControl');
  }
}
