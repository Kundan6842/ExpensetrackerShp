import AuthForm from "./Components/Authentication/AuthForm";

import { useContext } from "react";

import AuthContext from "./Components/Store/auth-context";
import Homepage from "./Components/Header/Homepage";


function App() {
  const authCntxt = useContext(AuthContext);
  const isLoggedIn = authCntxt.isLoggedIn;

  return <div>
    {isLoggedIn ? <Homepage /> : <AuthForm />}
    </div>;
}

export default App;
