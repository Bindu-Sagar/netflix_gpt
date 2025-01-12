export const validateSignIn = (email,password) =>{
  const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!validateEmail && ! validatePassword) return "Please enter valid email and password";
  if(!validateEmail) return "Enter a valid email";
  if(!validatePassword) return  "Password not valid";
  return null;
}
export const ValidateSignUp = (email,password,fullName,mobile) =>{
  const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const validateFullName = /^[A-Za-z]{3,30}/.test(fullName);
  const validateMobile = /^[0-9]{10}/.test(mobile)
  if(!validateEmail && !validateFullName && !validatePassword && !validateMobile) return "Please enter the correct details"
  if(!validateEmail && ! validatePassword) return "Please enter valid email and password";
  if(!validateEmail) return "Enter a valid email";
  if(!validatePassword) return  "Password not valid";
  return null;
}