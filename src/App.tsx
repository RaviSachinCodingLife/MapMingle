import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import IntoPage from "./pages/IntroPage/IntoPage";
import Home from "./pages/Home/Home";

const appRoutes = [
  {
    path: "/",
    element: <IntoPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];

const App = () => {
  return (
    <Box>
      <Router>
        <Routes>
          {appRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
