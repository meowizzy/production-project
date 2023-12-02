import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ThemeProvider from "./theme/ThemeProvider";
import "./styles/index.scss";

const root = createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
);
