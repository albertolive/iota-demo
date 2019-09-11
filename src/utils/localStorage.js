const localStorage = (method, key, value) => {
  try {
    return window.localStorage[method](key, value);
  } catch (err) {
    return false;
  }
};

export const setItem = (key, value) => localStorage('setItem', key, JSON.stringify(value));
export const getItem = key => JSON.parse(localStorage('getItem', key));
export const removeItem = key => localStorage('removeItem', key);
export const clear = () => localStorage('clear');

export const getItemExpired = key => {
  const now = new Date().getTime();
  const { timestamp = now } = getItem(key) || {};

  return timestamp <= now;
};
