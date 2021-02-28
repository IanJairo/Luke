import { Component, OnInit } from '@angular/core';
import { SecureStorageService } from '../services/secure-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public userName;

  constructor(
    private storageService: SecureStorageService

  ) { }



  ngOnInit() {
    this.userName ='';
    this.storageService.get('userName')
      .then((resul) => {
        this.userName = resul.value;
      })
      .catch(err => {
        console.log(err)
      })


  }

}
