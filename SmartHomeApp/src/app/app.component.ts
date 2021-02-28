import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecureStorageService } from './services/secure-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router: Router,
    private storageService: SecureStorageService

  ) {
    this.initializeApp();

  }

  async initializeApp() { 
    this.storageService.get('userName')
    .then((resul) => {
      this.router.navigate(['/tabs']);
      
    })
    .catch(err => {
      this.router.navigate(['/']);

    })

  }

}
