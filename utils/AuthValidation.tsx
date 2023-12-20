// Function to validate an email address
export const isValidEmail = (email: string): string | undefined => {
  // Regular expression to match valid email addresses
  const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
  // If the email is not null and passes the regex test, it is valid
  if (email !== null && regex.test(email)) {
    return undefined; // Return undefined to indicate that the email is valid
  }
  // If the email is invalid, return an error message
  return "Email is not valid";
};

// Function to validate a password
export const isValidPassword = (password: string): string | undefined => {
  // Passwords must be at least 8 characters long
  if (password === null || password.length < 8) {
    return "password needs to be at least 8 characters long";
  }

  // Regular expressions to match various password requirements
  const uppercasePattern = /.*[A-Z].*/;
  const lowercasePattern = /.*[a-z].*/;
  const digitPattern = /.*\d.*/;
  const specialCharPattern =
    /.*[\!\@\#\$\%\^\&\*\(\)\-\_\+\=\[\]\{\}\;\:\'\"\,\.\<\>\?\/\|].*/;

  // Validate the password against the requirements
  if (!uppercasePattern.test(password)) {
    return "password needs to contain at least one uppercase letter";
  }
  if (!lowercasePattern.test(password)) {
    return "password needs to contain at least one lowercase letter";
  }
  if (!digitPattern.test(password)) {
    return "password needs to contain at least one digit";
  }
  if (!specialCharPattern.test(password)) {
    return 'password needs to contain at least one special character like: "!@#$%^&*()-_+"';
  }
  return undefined; // Return undefined to indicate that the password is valid
};

// Function to validate a name
export const isValidName = (name: string): string | undefined => {
  // Name cannot be empty or just whitespace
  if (!name || name.trim() === "") {
    return "Name cannot be empty";
  }

  // Regular expression to match valid names (unicode characters, spaces, and hyphens)
  const regex = /^[\p{L} '-]+$/u;
  if (!regex.test(name)) {
    return "Name contains invalid characters";
  }

  return undefined; // Return undefined to indicate that the name is valid
};

// Function to validate a phone number
export const isValidPhoneNumber = (phoneNumber: string): string | undefined => {
  // Phone number cannot be empty or just whitespace
  if (!phoneNumber || phoneNumber.trim() === "") {
    return "Phone number cannot be empty";
  }

  // Regular expression to match valid phone numbers (digits, hyphens, plus signs, parentheses, and spaces)
  const regex = /^[0-9-+()\s]+$/;
  if (!regex.test(phoneNumber)) {
    return "Phone number contains invalid characters";
  }

  return undefined; // Return undefined to indicate that the phone number is valid
};
