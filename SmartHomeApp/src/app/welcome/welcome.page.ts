import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from '../services/alerts/alerts.service';
import { SecureStorageService } from '../services/secure-storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  public name: string;
  constructor(
    public router: Router,
    private storageService: SecureStorageService,
    private alertsService: AlertsService
  ) { }

  goStart(name: string) {
    if (name === undefined || name === null) {
      this.alertsService.presentToast('Ops, faltou seu nome!');
    }

    else {

      this.storageService.set('userName', name)
        .then((resul) => {
          console.log(resul);
          this.router.navigate(['/tabs']);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }


  ngOnInit() {
    this.storageService.get('color-theme')
      .then((resul) => {
        if (resul.value === 'dark') {
          document.body.setAttribute('color-theme', 'dark');

        } else {
          document.body.setAttribute('color-theme', 'light');

        }

      })

  }

}
