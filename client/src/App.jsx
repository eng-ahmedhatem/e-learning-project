import Erorr_404 from "./component/eror-404/Erorr-404";
import { lazy, Suspense, useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos"
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
// const Home = lazy(()=> import("./pages/home/Home"))
const Objectives = lazy(() => import("./pages/Objectives/Objectives"));
const Guide = lazy(() => import("./pages/guide/guide"));
function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
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
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
