import Erorr_404 from "./component/eror-404/Erorr-404";
import { lazy, Suspense, useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Header, Loader } from "./component";
import Contact from "./pages/contact/Contact";
const Login___Register = lazy(() => import("./pages/Login___Register/Login___Register"));
import Home from "./pages/home/Home";
import Dashboard_layout from "./pages/dashboard/Dashboard_layout";
import Home_dash from "./pages/dashboard/Home_dash";
const Objectives = lazy(() => import("./pages/Objectives/Objectives"));
const Guide = lazy(() => import("./pages/guide/guide"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector("header").classList.add("scroll");
        document.getElementById("main-title").style.color = "#333";
      } else {
        document.querySelector("header").classList.remove("scroll");
        document.getElementById("main-title").style.color = "#999";
      }
    };

    addEventListener("scroll", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const RouterLayout = () => (
    <>
      <Header />
      <main className="bg-[var(--main-bg,rgb(186 193 195 / 71%))]">
        <Outlet />
      </main>
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/dashboard" element={<Dashboard_layout />}>
          <Route path="home" element={<Home_dash/>} />
          <Route path="info" element={<h1>info</h1>} />
          <Route path="exam" element={<h1>exam</h1>} />
        </Route>
        <Route
          path="/login-register"
          element={
            <Suspense fallback={<Loader />}>
              <Login___Register />
            </Suspense>
          }
        />
        <Route path="/" element={<RouterLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/contact-us"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/guide"
            element={
              <Suspense fallback={<Loader />}>
                <Guide />
              </Suspense>
            }
          />
          <Route
            path="/objectives"
            element={
              <Suspense fallback={<Loader />}>
                <Objectives />
              </Suspense>
            }
          />
          <Route path="*" element={<Erorr_404 />} />
        </Route>
      </>
    )
  );

  if (isLoading) {
    return <Loader />;
  }
  return <RouterProvider router={router} />;
}

export default App;
