import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div className="w-screen h-screen">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
