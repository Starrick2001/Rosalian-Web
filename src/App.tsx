import React from "react";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <React.Fragment>
      <NavBar />
      {!isAuthenticated ? <Login /> : <h1 className="text-center mt-4">Hello {user?.name}</h1>}
    </React.Fragment>
  );
}

export default App;
