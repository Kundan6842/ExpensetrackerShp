import AuthForm from "./Components/Authentication/AuthForm";

//import { useContext } from "react";

//import AuthContext from "./Components/Store/auth-context";
import Homepage from "./Components/Header/Homepage";
//import store from "./Components/Store/store";
import { useSelector } from "react-redux";


function App() {
  //const authCntxt = useContext(AuthContext);
  const IsLoggedIn = useSelector((state)=>state.auth.isLoggedIn)

  return <div>
    {/* {IsLoggedIn ? <Homepage /> : <AuthForm />} */}
    {!IsLoggedIn && <AuthForm/>}
    {IsLoggedIn && <Homepage/>}
    </div>;
}

export default App;
