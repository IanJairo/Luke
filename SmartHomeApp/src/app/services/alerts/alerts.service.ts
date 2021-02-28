import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController) {
    
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

    // Mostra um toast na tela
    async presentToast(message: string) {
      const toast = await this.toastController.create({
        message,
        duration: 2000
      });
      toast.present();
    }
}
