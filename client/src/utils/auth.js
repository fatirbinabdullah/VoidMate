const KEY = 'vm_token';
const USER = 'vm_user';

export const saveAuth = (t, u) => {
  localStorage.setItem(KEY, t);
  localStorage.setItem(USER, JSON.stringify(u));
};
export const getToken = () => localStorage.getItem(KEY);
export const getUser = () => {
  try { return JSON.parse(localStorage.getItem(USER) || 'null'); }
  catch { return null; }
};
export const clearAuth = () => {
  localStorage.removeItem(KEY);
  localStorage.removeItem(USER);
};
