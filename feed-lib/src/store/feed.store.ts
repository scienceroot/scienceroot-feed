import {ScrFeedStoreConfig} from './feed-store-config.model';

export class ScrFeedStore {

  public static post() {
    return `${ScrFeedStoreConfig.fetch().basePath}`;
  }
}
