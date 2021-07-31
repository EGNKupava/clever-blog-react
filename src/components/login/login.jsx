import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";

import "./login.css";

export const Login = () => {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    console.log("res: ", res);
    const { profileObj, tokenId } = res;
    if (tokenId) {
      dispatch({
        type: "LOGIN_SUCCESS",
        profile: profileObj,
        token: tokenId,
      });
    }
  };

  const onFailure = (err) => {
    console.log("err: ", err);
  };

  return (
    <div className="login">
      <div className="bg" />
      <div className="content">
        <GoogleLogin
          clientId="410168734925-eti8f1p3tlf6j9dmv4dik6vsssfhdjj6.apps.googleusercontent.com"
          buttonText="Войти с помощью Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};
