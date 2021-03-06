import { User } from './user';
import { Urls } from './urls';

/**
 * Model class for single result.
 */
export interface GetResultResponse {

  /**
   * Creation date.
   */
  created_at: string;

  /**
   * User.
   */
  user: User;

  /**
   * Urls links.
   */
  urls: Urls;

  /**
   * Alternative text of image.
   */
  alt_description: string;

}
