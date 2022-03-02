import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { useState } from "react";

function Login() {
  const CLIENT_ID =
    "5423283379-9ram2ghnar7d58n3p83rsr46j626qkfg.apps.googleusercontent.com";

  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  function onLoginSuccess(response) {
    console.log(response);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  }

  function onLoginFail() {
    setShowLoginButton(true);
  }

  function onLogoutSuccess() {
    setShowLoginButton(true);
    setShowLogoutButton(false);
  }

  return (
    <div className="child">
      {showLoginButton ? (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFail}
        />
      ) : null}

      {showLogoutButton ? (
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={onLogoutSuccess}
          onFailure={onLoginFail}
        />
      ) : null}
    </div>
  );
}

export default Login;
