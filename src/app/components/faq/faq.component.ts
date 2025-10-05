import { Component, Input, OnInit } from '@angular/core';
import { FaqItem } from 'src/app/models/faq-item.model';

const questionsList = [
  {
    "header": "What To Wear?",
    "boady": "Semi formal neutral colors",
    "isPanelExpanded": false
  },
  {
    "header": "What Time Should I Arrive?",
    "boady": "Guests to arrive at 15:30 pm promptly",
    "isPanelExpanded": false
  },
  {
    "header": "Can I Bring A Plus One?",
    "boady": "Only guest that are on the invitations",
    "isPanelExpanded": false
  },
  {
    "header": "Are Kids Invited?",
    "boady": "Unfortunelty no other children invited other than the flower girls and family members",
    "isPanelExpanded": false
  },
  {
    "header": "Will There Be A Bar?",
    "boady": "The venue allows for own drinks. Please bring your own drinks and mixes in a neatly compacted cooler bag etc. Ice and glasses will be provided, designated area will be available to store your cooler bag. We request that no large cooler bags/boxes be brought, and please label your cooler bags or bottles. Champagne will be available on the tables for toasting.",
    "isPanelExpanded": false
  },
  {
    "header": "Should I bring a gift?",
    "boady": "Your presence at our wedding is the greatest gift of all. If you wish to honor us with a gift, we kindly invite you to contribute to our honeymoon fund, which will help us create unforgettable memories. Wedding post box will be available at the wedding guest table.",
    "isPanelExpanded": false
  },
  {
    "header": "Will accommodation be provided?",
    "boady": "Unfortunelty no accomodation available at the venue, those traveling from far, please arrange prior to wedding.",
    "isPanelExpanded": false
  },
  {
    "header": "When Should I RSVP?",
    "boady": "Rsvp before 31 Dec 2025",
    "isPanelExpanded": false
  }
] 

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public questoinsList: FaqItem[] = questionsList;
  
  @Input() public isMobileView = false;

  constructor() { }

  ngOnInit() {
  }

}
