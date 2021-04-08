import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchEngineService {

  private readonly ENDPOINT_ADDRESS = 'https://api.unsplash.com/photos/?client_id=9sDz5rlCnIvI6s_I4sYh3w6oldf60qxrsYqryev8ZsQ';

  constructor(httpClient: HttpClient) {
  }

  getPhotos(): void {
  }

  // https://api.unsplash.com/search/photos?query=canada
}
