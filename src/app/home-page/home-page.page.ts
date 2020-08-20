import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
private town:any;
  constructor() { }

  ngOnInit() {
  }

  filtertown(){
    //filter ads to only those from selected town
    console.log(this.town);
    }

  getstoredtown(){
    //get stored town if none is stored, prompt the user to select none

  }

}
