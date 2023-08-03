export class LocalStorageUtil {
  constructor() { }

  getData() {
    return JSON.parse(localStorage.getItem('records') || '[]');
  }

  clearStorage() {
    localStorage.clear();
  }
}