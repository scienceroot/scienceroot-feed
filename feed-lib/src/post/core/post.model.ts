import {ScrUser} from '@scienceroot/user';

export class ScrPost {

  public static fromObject(obj: any): ScrPost {
    return new ScrPost(
      ScrUser.fromObj(obj.poster),
      obj.text,
      obj.createdDate
    );
  }

  constructor(
    public poster: any,
    public text?: string,
    public createdDate?: Date
  ) {
  }

  public hasError(): string | null {
    let error: string | null = null;

    if (!this.text) {
      error = 'Please add a text to your post.';
    }

    return error;
  }
}
