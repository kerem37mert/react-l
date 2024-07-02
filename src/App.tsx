import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])

const App: React.FC = () => {
    return(
        <RouterProvider router={ router } />
    );
}

export default App;
