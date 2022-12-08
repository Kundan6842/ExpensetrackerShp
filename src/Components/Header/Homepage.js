import React, { useState, useEffect, useContext } from "react";
import classes from "./Homepage.module.css";
import ContactDetail from "./ContactDetail";
import AuthContext from "../Store/auth-context";
import NewHomepage from "./NewHomepage";

const Homepage = () => {
  const authCntxt = useContext(AuthContext);
  const [isShown, setIsShown] = useState(false);
  const [isNewHome, setisNewHome] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  async function addDataHandler(data1) {
    console.log(data1);
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyANtNuRfZ4qD9R-7t5p05uN9TjqzPbj93o",
      {
        method: "POST",
        body: JSON.stringify(data1),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setisNewHome((current)=> !current)
    setIsShown((current) => !current);
    console.log(data);
  }

 

  return (
    <div>
      {!isNewHome && ( <>
      {!isShown && (
        <>
          <div className={classes.main}>
            <div>welcome to expense tracker</div>
            <div className={classes.text}>your profile is incomplete</div>
            <button className={classes.btn} onClick={handleClick}>
              complete now
            </button>
          </div>
        </>
      )}
      {isShown && (
        <ContactDetail cancelclk={handleClick} onAddData={addDataHandler} />
      )}
     
     </>)}  
     {isNewHome && (<><div>
      <NewHomepage/>
      </div></>)}
    </div>
  );
};

export default Homepage;
