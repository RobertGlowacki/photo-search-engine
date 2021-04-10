import { GetSingleResult } from './get-single-result';

/**
 * Model class for search result.
 */
export class GetSearchResultsResponse {

  /**
   * Total number of results.
   */
  total: number;

  /**
   * Total number of pages.
   */
  totalPages: number;

  /**
   * List fo single result.
   */
  results: GetSingleResult[];

}
