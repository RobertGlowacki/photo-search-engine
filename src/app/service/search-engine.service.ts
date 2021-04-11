import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetSearchResultsResponse } from '../model/get-search-results-response';
import { GetAutocompleteResponse } from '../model/getAutocompleteResponse';

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
   * If there is a space in input it is replaced by its UNICODE character.
   *
   * @param input input typed by user
   */
  getResponse(input: string): Observable<HttpResponse<GetSearchResultsResponse>> {
    const headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'});
    return this.httpClient
      .get<GetSearchResultsResponse>(`${this.ENDPOINT_ADDRESS + this.CLIENT_ID}&query=${input.split(' ').join('%20')}`,
        {headers, observe: 'response'});
  }

  /**
   * The method gets the auto-complete keyword suggestions.
   *
   * @param input input typed by user
   */
  getAutocompleteKeywords(input: string): Observable<HttpResponse<GetAutocompleteResponse>> {
    const headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'});
    return this.httpClient
      .get<GetAutocompleteResponse>(`https://cors-anywhere.herokuapp.com/https://unsplash.com/nautocomplete/${input.split(' ').join('%20')}`,
        {headers, observe: 'response'});
  }

}
