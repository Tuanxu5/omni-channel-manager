/* eslint-disable no-useless-escape */

export const passwordValidator = (_, value) => {
  if (!value) {
    return Promise.reject(new Error("Please input your password!"));
  }
  if (value.length < 8) {
    return Promise.reject(new Error("Password must be at least 8 characters long!"));
  }
  if (!/[A-Z]/.test(value)) {
    return Promise.reject(new Error("Password must contain at least one uppercase letter!"));
  }
  if (!/[@!#\$%\^\&*\)\(+=._-]/.test(value)) {
    return Promise.reject(new Error("Password must contain at least one special character!"));
  }
  return Promise.resolve();
};
