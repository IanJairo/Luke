import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DatabaseService } from '../services/database/database.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage implements OnInit {

  public togglesSensor: any[] = [];

  public pool: boolean;
  public livingRoom: any;
  public ldr: boolean;
  public buzzer: boolean;
  public alarm: boolean;

  public contentAux: number = 0;

  constructor(
    public alertController: AlertController,
    private server: DatabaseService
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      subHeader: 'Sirene desligada',
      message: 'Só é possível ativar o alarme quando a sirene está ligada.',
      
      buttons: ['OK']
    });

    await alert.present();
  }




  homeOptions(event, type) {
    if (type == "pool") {
      if (event.detail.checked) {
        this.submmit('1', '1');
      } else {
        this.submmit('1', '0');
      }

    } else if (type == "livingRoom") {
      if (event.detail.checked) {
        this.submmit('2', '1');
      } else {
        this.submmit('2', '0');
      }

    } else if (type == "ldr") {
      if (event.detail.checked) {
        this.submmit('3', '1');
      } else {
        this.submmit('3', '0');
      }
    }

    else if (type == "buzzer") {
      if (event.detail.checked) {
        this.submmit('4', '1');
      } else {
        this.alarm = false
        this.submmit('4', '0');
      }
    }

    else {
      if (event.detail.checked && this.buzzer) {
        this.submmit('5', '1');
      } else {
        this.submmit('5', '0');
      }
    }
  }

  submmit(id, toggle) {
    const data = {
      'id': id,
      'status': toggle
    }
    this.server.updateData(data, 'alterarSensores.php')
      .subscribe((resul) => {
      })
  }






  ngOnInit() {
    this.server.getData('listarSensores.php').subscribe(
      data => {
        this.togglesSensor = data;

        data.forEach(element => {

          if (element['id'] == 1) {
            if (element['status'] == 1) {
              this.pool = true
            } else {
              this.pool = false
            }
          }

          else if (element['id'] == 2) {
            if (element['status'] == 1) {
              this.livingRoom = true
            } else {
              this.livingRoom = false
            }
          }

          else if (element['id'] == 3) {
            if (element['status'] == 1) {
              this.ldr = true
            } else {
              this.ldr = false
            }
          }

          else if (element['id'] == 4) {
            if (element['status'] == 1) {
              this.buzzer = true
            } else {
              this.buzzer = false
              this.presentAlert();
            }
          }
          else {
            if (element['status'] == 1) {
              if (this.buzzer == true) {
                this.alarm = true
              } else {
                this.alarm = false
              }
            } else {
              this.alarm = false
            }
          }
        });

        this.contentAux = 1;
      });
  }

}
