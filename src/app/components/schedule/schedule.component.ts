import { Component, Input, OnInit } from '@angular/core';
import { ScheduleItem } from 'src/app/models/schedule-item.model';

const scheduleListItems =
[
  {
    "heading": "Guest Arrival",
    "time": "3:30pm - 3:50pm",
    "description": "Guest to arrive 3:15pm-3:50pm at De Oude Caab Country Guest House",
    "imageName": "welcome-drinks.jpg"
  },
  {
    "heading": "Ceremony",
    "time": "4:00 pm",
    "description": "The ceremony will begin promptly at 4:00pm",
    "imageName": "ceremony.webp"
  },
  {
    "heading": "Signing of Register",
    "time": "4:30pm",
    "description": "Bridal Couple Signs Wedding Register",
    "imageName": "signing-of-register-2.jpg"
  },
  {
    "heading": "Confetti Shower of Love",
    "time": "4:45pm",
    "description": "Guests to line up for throwing of confetti",
    "imageName": "confetti-shower.jpg"
  },
  {
    "heading": "Group Photos with Family",
    "time": "16:50pm",
    "description": "Group photos with family",
    "imageName": "friends-and-family-photos.jpg",
    "rightAlign": true
  },
  {
    "heading": "Pre-Drinks and Grazing Table",
    "time": "17:00pm",
    "description": "Guest can enjoy some pre-drinks and snacks on the deck as the bridal couple take their photos",
    "imageName": "snacks-and-drinks.webp"
  },
  {
    "heading": "Guest to be seated at reception",
    "time": "18:00pm",
    "description": "Guests to be seated at reception to welcome bridal couple",
    "imageName": "guests-to-be-seated.jpg"
  },
  {
    "heading": "Bridal Couple Entrance",
    "time": "18:10pm",
    "description": "Bridal Couple Entrance",
    "imageName": "couple-enters.jpg"
  },
  {
    "heading": "Speeches",
    "time": "18:10pm - 19:00pm",
    "description": "Speeches are done",
    "imageName": "speeches.webp",
    "rightAlign": true
  },
  {
    "heading": "Supper is served",
    "time": "19:00pm",
    "description": "Supper is served - Buffet Style",
    "imageName": "dinner-reception.jpg"
  },
  {
    "heading": "Dessert & Fun",
    "time": "20:00pm - 20:45pm",
    "description": "Dessert Served Followed by Cake cutting, Flower Toss and Garter Toss",
    "imageName": "pudding-image.jpg"
  },
  {
    "heading": "Couples First Dance",
    "time": "20:45pm",
    "description": "Bridal Couple Opens the dansfloor",
    "imageName": "first-dance.jpg"
  },
  {
    "heading": "Party and Celebrations",
    "time": "21:00pm - 00:00am",
    "description": "Lets Party!!!",
    "imageName": "dancing-and-drinks.jpeg",
    "leftAlign": true
  }
]


// [
  // {
  //   "heading": "Welcome drinks",
  //   "description": "Have a few drinks and snacks before the formalities.",
  //   "time": "3:00pm",
  //   "imageName": "welcome-drinks.jpg"
  // },
  // {
  //   "heading": "Ceremony",
  //   "description": "Time to make it official!",
  //   "time": "4:00pm",
  //   "imageName": "ceremony.webp"
  // },
  // {
  //   "heading": "Snacks and drinks",
  //   "description": "Enjoy some delicious snacks and drinks while the bride and groom takes photos.",
  //   "time": "4:30pm",
  //   "imageName": "snacks-and-drinks.webp"
  // },
  // {
  //   "heading": "Friends and family photos",
  //   "description": "Join the bride and groom for photos.",
  //   "time": "6:00pm",
  //   "imageName": "friends-and-family-photos.jpg",
  //   "rightAlign": true
  // },
  // {
  //   "heading": "Dinner time",
  //   "description": "Enjoy a buffet style dinner in the beautiful reception.",
  //   "time": "7:00pm",
  //   "imageName": "dinner-reception.jpg"
  // },
  // {
  //   "heading": "Drinks and celebrations",
  //   "description": "Time to let loose and celebrate the newlyweds!",
  //   "time": "9:00pm",
  //   "imageName": "dancing-and-drinks.jpeg",
  //   "leftAlign": true
  // }
// ]

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public scheduleList = new Array<ScheduleItem>;
  
  @Input() public isMobileView = false;

  ngOnInit() {
    this.scheduleList.push(...scheduleListItems);
  }

}
