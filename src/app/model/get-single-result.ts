import { User } from './user';
import { Urls } from './urls';

/**
 * Model class for single result.
 */
export interface GetSingleResult {

  /**
   * Creation date.
   */
  created_at: string;

  /**
   * Alternative description.
   */
  alt_description: string;

  /**
   * User.
   */
  user: User;

  /**
   * Urls links.
   */
  urls: Urls;

}
