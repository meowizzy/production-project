import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../components/App/App";
import MainPageAsync from "../pages/MainPage/MainPage.async";
import AboutPageAsync from "../pages/AboutPage/AboutPage.async";
import {Suspense} from "react";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="/" element={<Suspense fallback="Идет загрузка..."><MainPageAsync /></Suspense>} />
        <Route path="/about" element={<Suspense fallback="Идет загрузка..."><AboutPageAsync /></Suspense>} />
    </Route>
));
