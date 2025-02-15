import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#4CAF50", // Green when ON
    secondary: "#ccc", // Gray when OFF
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-screen h-screen ">
        <RouterProvider router={routes} />
      </div>
    </ThemeProvider>
  );
}

export default App;
