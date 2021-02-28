import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureStorageService } from './services/secure-storage.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  },
    SecureStorageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
