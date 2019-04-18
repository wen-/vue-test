function get(item) {
  return JSON.parse(localStorage.getItem(item));
}

function set(item, val) {
  localStorage.setItem(item, JSON.stringify(val));
}

function updateObj(item, val) {
  const oldData = get(item);
  set(item, {...oldData, ...val});
};

function updateArr(item, val) {
  const oldData = get(item);
  set(item, [...oldData, ...val]);
};

function remove(item) {
  localStorage.removeItem(item);
}

function clear() {
  localStorage.clear();
}

export { get, set, remove, clear, updateObj, updateArr };
