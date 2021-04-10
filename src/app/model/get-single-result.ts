import { User } from './user';
import { Urls } from './urls';

/**
 * Model class for single result.
 */
export class GetSingleResult {

  /**
   * Creation date.
   */
  createdAt: string;

  /**
   * Alternative description.
   */
  altDescription: string;

  /**
   * User.
   */
  user: User;

  /**
   * Urls links.
   */
  urls: Urls;

}
