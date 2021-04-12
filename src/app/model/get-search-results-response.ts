import { GetSingleResult } from './get-single-result';

/**
 * Model class for search results.
 */
export interface GetSearchResultsResponse {

  /**
   * Total number of results.
   */
  total: number;

  /**
   * Total number of pages.
   */
  totalPages: number;

  /**
   * Array of single result.
   */
  results: GetSingleResult[];

}
