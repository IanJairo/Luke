import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage implements OnInit {
  constructor() { }

 

  homeOptions(event, type) {
    if (type == "pool") {
      if (event.detail.checked) {

      } else {

      }

    } else if (type == "livingRoom") {
      if (event.detail.checked) {

      } else {

      }


    }  else if (type == "ldr") {
      if (event.detail.checked) {

      } else {

      }


    }
    
    else if (type == "buzzer") {
      if (event.detail.checked) {

      } else {

      }


    }
    else {
      if (event.detail.checked) {

      } else {

      }
    }


  }

  ngOnInit() {
  }

}
