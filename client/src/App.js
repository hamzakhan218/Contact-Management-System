import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";
const App = () => {
  return (
    <AuthContextProvider>
      <ToastContainer autoClose={1000} position="top-center" theme="dark" />
      <Navbar />
      <Routes>
        {/* <Route exact path="/" children={} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
