export const validateEmail = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassWordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Please enter a valid email address.";
  }
  if (!isPassWordValid) {
    return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
  }
};
