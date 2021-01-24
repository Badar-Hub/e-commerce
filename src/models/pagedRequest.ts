export default class PagedRequest {
  public page: number;

  public pageSize: number;

  public filterOn?: string;

  public descending?: boolean = false;

  public filter = "";

  constructor(page: number, pageSize: number, filterOn = "", descending = false) {
    this.page = page;
    this.pageSize = pageSize;
    this.filterOn = filterOn;
    this.descending = descending;
  }

  get sortRequest(): string {
    if (this.filterOn === "") {
      return "";
    }
    const orderString: string = this.descending ? "desc" : "asc";
    const result = `${this.filterOn} ${orderString}`;
    return result;
  }

  buildParams(): any {
    const result = {
      page: this.page,
      pageSize: this.pageSize,
      sort: this.sortRequest,
      filter: this.filter
    };
    return result;
  }
}
