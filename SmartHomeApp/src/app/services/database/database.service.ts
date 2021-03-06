import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private urlServer: string = "https://base.orditi.com/services-tein/"
  constructor(
    public httpClient: HttpClient

  ) { }

  updateData(data, url: string) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let postData = data;
    let urlServer = this.urlServer + url

    return this.httpClient.post<any[]>(
      urlServer,
      postData,
      { headers: new HttpHeaders({ "Content-Type": "application/json" }) });  

  }


  getData(url: string) {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const token = 50321;
    let urlServer = this.urlServer + url


    return this.httpClient.post<any[]>(
      urlServer,
      token,
      { headers: new HttpHeaders({ "Content-Type": "application/json" }) })

  }
}
