import AuthForm from "./Components/Authentication/AuthForm";
import { useContext } from "react";
import {Switch,Router} from "react-router-dom"
import AuthContext from "./Components/Store/auth-context";
import Navhead from "./Components/Header/Homepage";

function App() {
  const authCntxt = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
      <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        
      </Switch>
    </Layout>
    
  );
}

export default App;
