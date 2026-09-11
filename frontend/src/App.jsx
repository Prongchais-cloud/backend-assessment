import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Update from "./pages/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <>404 - page not found!!</>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/update/:_id", element: <Update />}
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

