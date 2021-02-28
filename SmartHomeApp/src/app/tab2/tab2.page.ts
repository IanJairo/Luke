import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecureStorageService } from '../services/secure-storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public router: Router,
    private storageService: SecureStorageService
  ) {}

async logOut() {
  await this.storageService.clear('userName')
  .then((resul) => {
    location.reload();

    this.router.navigate(['/']);
    
    
  })
  .catch(err => {

  })
}


  toggleTheme(event) {
    console.log('evento', event);

    if(event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');

    }
  }

}
