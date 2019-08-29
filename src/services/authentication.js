export const TOKEN_KEY = 'user_session';
export const RESTAURANT_KEY = 'restaurant_id';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
  && localStorage.getItem(RESTAURANT_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getRestaurantId = () => localStorage.getItem(RESTAURANT_KEY);
export const login = (token, restaurantId) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(RESTAURANT_KEY, restaurantId);
};
export const logout = (callback) => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(RESTAURANT_KEY);
  return callback();
};
