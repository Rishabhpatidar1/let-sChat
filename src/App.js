import React, { useContext } from "react";
import Register from "./pages/Register";
import "./Index.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "remixicon/fonts/remixicon.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  // console.log(currentUser);
  return (
    <Router>
      <Routes>
        <Route
          index
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
