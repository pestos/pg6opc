import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header/index";
import Footer from "../src/layout/Footer/index.jsx";
import Apropos from "../src/pages/Apropos/index.jsx";
import Error404 from "../src/pages/Error/index.jsx";
import FormAppartment from "./pages/information/index.jsx";
import "../src/styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/logement/:id" element={<FormAppartment />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
