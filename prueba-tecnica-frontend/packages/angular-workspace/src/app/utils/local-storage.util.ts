export class LocalStorageUtil {
  constructor() { }

  getData() {
    return JSON.parse(localStorage.getItem('records') || '{ data: [] }');
  }

  clearStorage() {
    localStorage.clear();
  }
}