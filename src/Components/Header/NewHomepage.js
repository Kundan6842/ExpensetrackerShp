import React, { useContext } from "react";
import classes from "./NewHomepage.module.css";
import AuthContext from "../Store/auth-context";
import ExpenseForm from "./ExpenseForm";

const NewHomepage = () => {
  const authCntxt = useContext(AuthContext);
  const LogoutHandler = () => (authCntxt.logout());
  async function VerifyEmailHandler() {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyANtNuRfZ4qD9R-7t5p05uN9TjqzPbj93o",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: authCntxt.isLoggedIn,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

      //console.log('kundan444');
  }

  return (
    <>
    <div className={classes.main}>
      <div>welcome to expense tracker</div>
      <button className={classes.btn} onClick={VerifyEmailHandler}>
        verify email
      </button>
      <button className={classes.btn} onClick={() => (LogoutHandler,console.log('kundan333'))} >
        Logout
      </button>
    </div>
    <div>
      <ExpenseForm/>
    </div>
    </>
  );
};

export default NewHomepage;
