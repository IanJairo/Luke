import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database/database.service';


@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage implements OnInit {
  public sensors;
  
  togglesSensor: any[] = [];
  pool: boolean;
  livinRoom: any;
  ldr: boolean;
  buzzer: boolean;
  alarm: boolean;
  contentAux: number = 0;

  constructor(
    private server: DatabaseService
  ) { }


  homeOptions(event, type) {
    if (type == "pool") {
      if (event.detail.checked) {

      } else {

      }

    } else if (type == "livingRoom") {
      if (event.detail.checked) {

      } else {

      }


    } else if (type == "ldr") {
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

    this.server.getData('listarSensores.php').subscribe(
      data => {
        console.log('data: ', data)
        
        data.forEach(element => {
        console.log('element: ', element)

        if(element['id']== 1) {
          if(element['status'] ==  1){
            this.pool = true
          } else {
            this.pool = false
          }
        }      

        else if(element['id']== 2) {
          if(element['status'] ==  1){
            this.livinRoom = true
          } else {
            this.livinRoom = false
          }
          console.log('sala', this.livinRoom)
        }

        else if(element['id']== 3) {
          if(element['status'] ==  1){
            this.ldr = true
          } else {
            this.ldr = false
          }
          console.log('ldr', this.ldr)
        }

        else if(element['id']== 4) {
          if(element['status'] ==  1){
            this.buzzer = true
          } else {
            this.buzzer = false
          }
          console.log('buzzer', this.buzzer)
        }
        else {
          if(element['status'] ==  1){
            if(this.buzzer == true) {
              this.alarm = true
            } else {
              this.alarm = false

            } 
            
                  
          } else {
            this.alarm = false
          }
          console.log('alarm', this.alarm)
        }           
        });   
        
        this.contentAux = 1;
       });
  }

}
