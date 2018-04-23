export class ScrFeedStoreConfig {

  static readonly storageKeys = {
    basePath: 'scr.feed.post.base'
  };

  static fetch(): ScrFeedStoreConfig {
    const base = sessionStorage.getItem(ScrFeedStoreConfig.storageKeys.basePath) || '';

    return new ScrFeedStoreConfig(base);
  }

  constructor(
    public basePath: string
  ) {

  }

  public save() {
    for (const key in ScrFeedStoreConfig.storageKeys) {
      if (!!ScrFeedStoreConfig.storageKeys[key]) {
        sessionStorage.setItem(
          ScrFeedStoreConfig.storageKeys[key],
          this[key]
        );
      }
    }
  }
}
