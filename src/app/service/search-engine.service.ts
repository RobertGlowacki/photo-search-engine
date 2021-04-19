import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetSearchResultsResponse } from '../model/get-search-results-response';
import { GetAutocompleteResponse } from '../model/get-autocomplete-response';

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
   * Endpoint address for access keywords.
   */
  private readonly AUTOCOMPLETE_KEYWORDS_ADDRESS = 'https://secret-ocean-49799.herokuapp.com/https://unsplash.com/nautocomplete/';

  /**
   * Number of items displayed per page.
   */
  private readonly ITEMS_PER_PAGE = 25;

  /**
   * @param httpClient http client
   */
  constructor(private httpClient: HttpClient) {
  }

  /**
   * Method gets result of search.
   * If there is a space in input it is replaced by its UNICODE character.
   *
   * @param input input typed by user
   * @param page page
   */
  getResponse(input: string, page: number): Observable<HttpResponse<GetSearchResultsResponse>> {
    const headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'});
    return this.httpClient
      .get<GetSearchResultsResponse>(`${this.ENDPOINT_ADDRESS + this.CLIENT_ID}&query=${input.split(' ').join('%20')}&per_page=${this.ITEMS_PER_PAGE}&page=${page}`,
        {headers, observe: 'response'});
  }

  /**
   * Method gets the auto-complete keyword suggestions.
   * If there is a space in input it is replaced by its UNICODE character.
   *
   * @param input input typed by user
   */
  getAutocompleteKeywords(input: string): Observable<HttpResponse<GetAutocompleteResponse>> {
    const headers: HttpHeaders = new HttpHeaders({Accept: 'application/json'});
    return this.httpClient
      .get<GetAutocompleteResponse>(`${this.AUTOCOMPLETE_KEYWORDS_ADDRESS}${input.split(' ').join('%20')}`,
        {headers, observe: 'response'});
  }

}
