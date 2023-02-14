import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Homepage from "./modules/HomePage/pages";
import ArtefactPage from "./modules/ArtefactPage/pages";
import DashboardPage from "./modules/DashboardPage/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "artefect",
    element: <ArtefactPage />,
  },
  {
    path: "dashboard",
    element: <DashboardPage />,
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
