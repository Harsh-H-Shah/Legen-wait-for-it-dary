import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardUni from "./pages/DashboardUni";
import DashboardUser from "./pages/DashboardUser";
import AddCertificate from "./pages/AddCertificate";
import Verification from "./pages/Verification";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboardUni", element: <DashboardUni /> },
  { path: "/dashboardUser", element: <DashboardUser /> },
  { path: "/addCertificate", element: <AddCertificate /> },
  { path: "/verification", element: <Verification /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
