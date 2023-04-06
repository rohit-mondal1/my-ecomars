import "./App.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

function App() {
  return (
    <div className="max-w-[1120px] mx-auto ">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
