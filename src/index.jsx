import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sakumlapa from "./Sakumlapa";
import Skaititajs from "./Skaititajs";
import ApiIelade from "./ApiIelade";
import ApiLogo from "./ApiLogo";
import Kalkulators from "./kalkulators";
import Layout from "./Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Sakumlapa />} />
          <Route path="skaititajs" element={<Skaititajs />} />
          <Route path="kalkulators" element={<Kalkulators />} />
          <Route path="/api/kaki" element={<ApiIelade />} />
          <Route path="/api/kompanijas" element={<ApiLogo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
