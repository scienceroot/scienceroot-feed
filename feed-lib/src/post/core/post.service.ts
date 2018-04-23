import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ScrPost} from './post.model';
import {ScrFeedStore} from '../../store/feed.store';

@Injectable()
export class ScrPostService {

    constructor(private _httpClient: HttpClient) {
    }

    public create(post: ScrPost): Promise<ScrPost> {
      const url: string = ScrFeedStore.post();

      return this._httpClient.post(url, post)
        .map(res => ScrPost.fromObject(res))
        .toPromise();
    }
}
