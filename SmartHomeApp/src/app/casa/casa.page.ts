import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage implements OnInit {
  public isDisabledReorder: boolean = true
  constructor() { }

  reorderGroup(isDisabledReorder) {
    if (isDisabledReorder) {
      return this.isDisabledReorder = false
    } else {
      return this.isDisabledReorder = true
    }
  }

  homeOptions(event, type) {
    if (type == "pool") {
      if (event.detail.checked) {

      } else {

      }

    } else if (type == "livingRoom") {
      if (event.detail.checked) {

      } else {

      }
    } else {
      if (event.detail.checked) {
        
      } else {

      }
    }


  }

  ngOnInit() {
  }

}
