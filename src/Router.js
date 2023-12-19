import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Submitted from "./Components/Submitted";
import Fee from "./Fee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Form />,
  },
  {
    path: "/pay",
    element: <Fee />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
