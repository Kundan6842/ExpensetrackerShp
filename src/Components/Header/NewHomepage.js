import React from "react";
import classes from "./NewHomepage.module.css";
//import AuthContext from "../Store/auth-context";
import ExpenseForm from "../ExpenseData/ExpenseForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authActions } from "../Store/authreducer";

const NewHomepage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.auth.token)
  //const authCntxt = useContext(AuthContext);
  const LogoutHandler = () => (dispatch(authActions.logout()));
  async function VerifyEmailHandler() {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyANtNuRfZ4qD9R-7t5p05uN9TjqzPbj93o",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //const data = await response.json();

      //console.log('kundan444');
  }

  return (
    <>
    <div className={classes.main}>
      <div>welcome to expense tracker</div>
      <button className={classes.btn} onClick={VerifyEmailHandler}>
        verify email
      </button>
      <button className={classes.btn} onClick={() => (LogoutHandler())} >
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
