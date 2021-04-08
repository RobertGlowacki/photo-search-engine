import { GetSingleResult } from './get-single-result';

/**
 * Model class for search result.
 */
export class GetSearchResults {

  /**
   * Total number of results.
   */
  total: number;

  /**
   * Totoal number of pages.
   */
  totalPages: number;

  /**
   * List fo single result.
   */
  results: Array<GetSingleResult>;

}
