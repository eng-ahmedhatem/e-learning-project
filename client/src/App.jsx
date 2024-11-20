import Erorr_404 from "./component/eror-404/Erorr-404";
import { lazy, Suspense, useEffect, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Header, Loader } from "./component";
import Contact from "./pages/contact/Contact";
const Login___Register = lazy(() =>
  import("./pages/Login___Register/Login___Register")
);
import Home from "./pages/home/Home";
import Objectives from "./pages/Objectives/Objectives";
import Guide from "./pages/guide/guide";
// import { Login___Register } from "./pages";
function App() {
  useEffect(() => {
    addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        document.querySelector("header").classList.add("scroll");
        document.getElementById("main-title").style.color = "#333";
      } else {
        document.querySelector("header").classList.remove("scroll");
        document.getElementById("main-title").style.color = "#999";
      } // Add or remove the class "fixed" to the header when scrolling
    });
    return () => {
      removeEventListener("scroll", () => {
        document.querySelector("header").classList.remove("scroll");
      });
    };
  }, []);
  const [isLoading, setIsloding] = useState(true);
  useEffect(() => {
    const tt = setTimeout(() => {
      setIsloding(false);
    }, 2000);
  }, []);
  const RouterLayout = () => {
    return (
      <>
        <Header />
        <main className="bg-[var(--main-bg,rgb(186 193 195 / 71%))]">
        <Outlet />
        </main>
      </>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route
            path="/login-register"
            element={
              <Suspense fallback={<Loader />}>
                <Login___Register />
              </Suspense>
            }
          />
        <Route path="/" element={<RouterLayout />}>
            <Route index  element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/guide" element={<Guide/>} />
            <Route path="/objectives" element={<Objectives />} />
        <Route path="*" element={<Erorr_404 />} />
        </Route>
      </>
    )
  );

  return <>
  <RouterProvider router={router}></RouterProvider>
  </>;
}

export default App;
