// src/utils/auth.js
export const setAuth = (user) => {
  localStorage.setItem("authUser", JSON.stringify(user));
};

export function getAuth() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export const clearAuth = () => {
  localStorage.removeItem("authUser");
};
