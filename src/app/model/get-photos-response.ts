import { GetResultResponse } from './get-result-response';

/**
 * Model class for photos search results.
 */
export interface GetPhotosResponse {

  /**
   * Total number of results.
   */
  total: number;

  /**
   * Total number of pages.
   */
  total_pages: number;

  /**
   * Array of single result.
   */
  results: GetResultResponse[];

}
