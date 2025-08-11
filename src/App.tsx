import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import {
  About,
  Blog,
  Contact,
  Error,
  HomeLayout,
  Landing,
  Portfolio,
  Qualifications,
} from "./pages";

function App() {
  const router = createRouter({
    routeTree: HomeLayout.addChildren([
      Landing,
      About,
      Blog,
      Contact,
      Portfolio,
      Qualifications,
      Error,
    ]),
  });
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
