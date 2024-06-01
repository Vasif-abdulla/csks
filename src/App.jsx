import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
    // {
    //   path: "/404",
    //   element: <NotFound />,
    // },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
