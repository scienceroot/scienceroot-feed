import {ScrFeedStoreConfig} from './feed-store-config.model';

export class ScrFeedStore {

  public static post() {
    return `${ScrFeedStoreConfig.fetch().basePath}`;
  }

  public static postById(postId: string) {
    return `${ScrFeedStoreConfig.fetch().basePath}${postId}`;
  }

  public static postsByUser(userId: string) {
    return `${ScrFeedStoreConfig.fetch().basePath}user/${userId}`;
  }
}
