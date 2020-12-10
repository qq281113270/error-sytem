class ModelsStore {
  constructor() {
    this.store = null;
  }
  get(key) {
    return (
      key in this.store && this.store.hasOwnProperty(key) && this.store[key]
    );
  }
  set(key, value) {
    this.store = {
      ...this.store,
      [key]: value,
    };
  }
  del(key) {
    delete this.store[key];
  }
}

export default new ModelsStore();
