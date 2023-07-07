import React from 'react';
// create a LoginForm function which returns the className
//Create a h3 with Log in 
// Add imput text to the login forms with placeholder text
function LoginForm() {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
