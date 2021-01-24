export default class PagedResult<T> {
  public currentPage = 1;

  public pageSize = 10;

  public rowCount = 1;

  public pageCount = 1;

  public results: Array<T> = [];
}
