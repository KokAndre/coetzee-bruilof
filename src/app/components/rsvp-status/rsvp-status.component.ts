import { Component, Input, OnInit } from '@angular/core';
import { WeddingParticipentsData } from 'src/app/models/wedding-participents-data.model';
import { RsvpServiceService } from 'src/app/rsvp-service.service';

@Component({
  selector: 'app-rsvp-status',
  templateUrl: './rsvp-status.component.html',
  styleUrls: ['./rsvp-status.component.scss']
})
export class RsvpStatusComponent implements OnInit {
  public statusFilterGroup = 'all';

  @Input() public fullWeddingPartyList = new Array<WeddingParticipentsData>();
  @Input() public isMobileView: boolean = false;

  constructor(public rsvpService: RsvpServiceService) { }

  ngOnInit() {
    this.getAllAtendees();
  }

  public async getAllAtendees() {
    // let result = this.rsvpService.getAllUsers();
    // console.log("Results of all: ", result);

    this.rsvpService.getAllUsers()
      .then((response) => {
        // Handle success (e.g., show a success message)
        console.log("Results of all: ", response);
      })
      .catch((error) => {
        // Handle error (e.g., show an error message)
      });
  }

}
