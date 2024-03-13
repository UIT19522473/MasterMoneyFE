// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import Layout from "./Layout/Layout";
import Transactions from "./Pages/Transactions";
import Reports from "./Pages/Reports";
import Categories from "./Pages/Categories";
import Wallets from "./Pages/Wallets";
import ConfirmRegister from "./Pages/ConfirmRegister";
import NotifyVerifyEmail from "./Pages/NotifyVerifyEmail";
import RegisterSuccessfully from "./Pages/RegisterSuccessfully";

import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.user.accessToken);
  console.log(token);
  return (
    <Router>
      <Routes>
        {token ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/wallets" element={<Wallets />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        ) : (
          <Route path="/">
            {/* <Route path="/login" element={<Login />} /> */}
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/notify-verify-email"
              element={<NotifyVerifyEmail />}
            />
            <Route path="/confirm-register" element={<ConfirmRegister />} />
            <Route
              path="/register-successfully"
              element={<RegisterSuccessfully />}
            />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
