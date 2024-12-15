import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";

const myRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={myRoutes} />;
};

export default App;
