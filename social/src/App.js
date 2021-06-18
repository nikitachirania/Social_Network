import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

const App = () => (
    <BrowserRouter>
        <MainRouter /> //wrapping all routes in browserroute
    </BrowserRouter>
);

export default App;