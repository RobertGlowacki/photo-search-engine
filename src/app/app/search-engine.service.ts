import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchEngineService {

  private readonly ENDPOINT_ADDRESS = 'https://api.unsplash.com/photos/?';

  private readonly CLIENT_ID = 'client_id=9sDz5rlCnIvI6s_I4sYh3w6oldf60qxrsYqryev8ZsQ';

  constructor(private httpClient: HttpClient) {
  }

  getPhotos(input: string): Observable<any> {
    console.log(this.ENDPOINT_ADDRESS + this.CLIENT_ID + 'Q&query=' + input);
    const headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'});
    return this.httpClient.get(this.ENDPOINT_ADDRESS + this.CLIENT_ID + 'Q&query=' + input, {headers, observe: 'response'});
  }

}
