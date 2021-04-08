import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service responsible for fetching data.
 */
@Injectable({
  providedIn: 'root'
})
export class SearchEngineService {

  /**
   * Endpoint address.
   */
  private readonly ENDPOINT_ADDRESS = 'https://api.unsplash.com/search/photos/?';

  /**
   * Client Id.
   */
  private readonly CLIENT_ID = 'client_id=9sDz5rlCnIvI6s_I4sYh3w6oldf60qxrsYqryev8ZsQ';

  /**
   * @param httpClient httpClient
   */
  constructor(private httpClient: HttpClient) {
  }

  /**
   * Method get result of search.
   *
   * @param input input typed by user
   */
  getPhotos(input: string): Observable<any> {
    console.log(this.ENDPOINT_ADDRESS + this.CLIENT_ID + '&query=' + input);
    const headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'});
    return this.httpClient.get(this.ENDPOINT_ADDRESS + this.CLIENT_ID + 'Q&query=' + input, {headers, observe: 'response'});
  }

}
