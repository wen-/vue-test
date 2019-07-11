const storage = {
  get: function(item) {
    return JSON.parse(localStorage.getItem(item));
  },
  set: function(item, val) {
    localStorage.setItem(item, JSON.stringify(val));
  },
  updateObj: function(item, val) {
    const oldData = this.get(item);
    this.set(item, {...oldData, ...val});
  },
  updateArr: function(item, val) {
    const oldData = this.get(item);
    this.set(item, [...oldData, ...val]);
  },
  remove: function(item) {
    localStorage.removeItem(item);
  },
  clear: function() {
    localStorage.clear();
  }
};
export default storage;
