
export class ScrPost {

  public static fromObjArr(objArr: any[]): ScrPost[] {
    return objArr.map(ScrPost.fromObject);
  }

  public static fromObject(obj: any): ScrPost {
    return new ScrPost(
      obj.creator,
      obj.id,
      obj.content,
      obj.createdDate
    );
  }

  public contentAsHtml: string;

  constructor(
    public creator: any,
    public id?: string,
    public content?: string,
    public createdDate?: Date
  ) {
    if (!!this.content) {
      this._toHtml(this.content);
    }
  }

  public hasError(): string | null {
    let error: string | null = null;

    if (!this.content) {
      error = 'Please add a content to your post.';
    }

    return error;
  }

  private _toHtml(content: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    let result: string;

    result = content.replace(/\r?\n/g, '<br />');
    result = result.replace(
      urlRegex,
      (url) => `<a  href="${url}" 
                            rel="noopener" 
                            target="_blank">${url}</a>`
    );

    this.contentAsHtml = result;
  }
}
