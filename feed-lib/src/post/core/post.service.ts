import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ScrPost} from './post.model';
import {ScrFeedStore} from '../../store/feed.store';
import {map} from 'rxjs/operators';

@Injectable()
export class ScrPostService {

    constructor(private _httpClient: HttpClient) {
    }

    public create(post: ScrPost): Promise<ScrPost> {
      const url: string = ScrFeedStore.post();

      return this._httpClient.post(url, post)
        .pipe(
          map(ScrPost.fromObject)
        )
        .toPromise();
    }

    public getByUserId(userId: string): Promise<ScrPost[]> {
      const url: string = ScrFeedStore.postsByUser(userId);

      return this._httpClient.get(url)
        .pipe(
          map(ScrPost.fromObjArr)
        )
        .toPromise();
    }
}
