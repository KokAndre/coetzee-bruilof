import { Component, Input, OnInit } from '@angular/core';
import { WeddingParticipentsData } from 'src/app/models/wedding-participents-data.model';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.scss']
})
export class WeddingPartyComponent implements OnInit {
  public fullBridalList = [
  {
    name: "Elmarie",
    title: "Maid of Honor",
    description: "Elmarie is the bride’s cherished best friend and sister at heart, a radiant soul whose unwavering love and infectious laughter light up any room. With a bond forged through years of shared secrets, endless adventures, and heartfelt support, she’s the one who knows the bride inside and out. Elmarie’s warmth, loyalty, and knack for making every moment unforgettable make her an irreplaceable part of this special day."
  },
  {
    name: "Jo-Mari",
    title: "Bridesmaid",
    description: "Jo-Mari is not only the Groom's sister but a very close and loving friend of the bride. She has a very soft place in both the groom and bride’s hearts."
  },
  {
    name: "Suzanne",
    title: "Bridesmaid",
    description: "Suzanne is one of the bride’s dearest friends. Loving and a personality to keep you entertained all night long."
  },
  {
    name: "Yolandi",
    title: "Bridesmaid",
    description: "Yolandi is a dear friend of both the bride and groom. She is a wild flower, with an open and caring heart."
  },
  {
    name: "Jaco",
    title: "Best Man",
    description: "Jaco is the groom’s brother-in-law. An amazing, caring and open-hearted person."
  },
  {
    name: "Stephan",
    title: "Groomsmen",
    description: "Stephan is the brother of the groom. A beautiful, soft-hearted person."
  },
  {
    name: "Andre",
    title: "Groomsmen",
    description: "Andre is the stepbrother of the groom. He has a wonderful soul, full of energy and ready to rock the dancefloor."
  },
  {
    name: "Johan",
    title: "Groomsmen",
    description: "Johan is a dear friend of both the bride and groom. He has a wonderful soft-hearted nature, and beautiful soul."
  }
]

  ngOnInit(): void {
  }


}
