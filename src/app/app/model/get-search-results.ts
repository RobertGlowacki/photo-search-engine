import { GetSingleResult } from './get-single-result';

/**
 * Model class for search result.
 */
export interface GetSearchResults {

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
  results: Array<GetSingleResult>;

}
