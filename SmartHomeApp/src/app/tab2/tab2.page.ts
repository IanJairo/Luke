import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecureStorageService } from '../services/secure-storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public isDarkTheme: boolean;
  constructor(
    public router: Router,
    private storageService: SecureStorageService
  ) {
    this.storageService.get('color-theme')
      .then((resul) => {
        if (resul.value === 'dark') {

          this.isDarkTheme = true
          document.body.setAttribute('color-theme', 'dark');

        } else {
          this.isDarkTheme = false
          document.body.setAttribute('color-theme', 'light');

        }

      })

  }

  async logOut() {
    await this.storageService.clear('userName')
      .then((resul) => {
        location.reload();

        this.router.navigate(['/']);


      })
      .catch(err => {

      })
  }


  async toggleTheme(event) {
    console.log('evento', event);

    if (event) {
      document.body.setAttribute('color-theme', 'dark');
      await this.storageService.set('color-theme', 'dark')
    } else {
      document.body.setAttribute('color-theme', 'light');
      await this.storageService.set('color-theme', 'light')
    }
  }

}
