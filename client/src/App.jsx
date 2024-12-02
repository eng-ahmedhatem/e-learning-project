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
import { persistor, store } from './store'
import { Provider, useSelector } from 'react-redux'
import { Header, Loader } from "./component";
import Contact from "./pages/contact/Contact";
const Login___Register = lazy(() => import("./pages/Login___Register/Login___Register"));
import Home from "./pages/home/Home";
import Home_dash from "./pages/dashboard/Home_dash";
import axios from "axios";
import Protect from "./Protect";
import { PersistGate } from "redux-persist/lib/integration/react";
import Info from "./pages/dashboard/info/Info";
import Exam_dash from "./pages/dashboard/exam/Exam_dash";
import Scale from "./pages/dashboard/Scale";
import Lesson from "./pages/dashboard/Lesson";
const Dashboard_layout = lazy(()=> import("./pages/dashboard/Dashboard_layout"))
const Objectives = lazy(() => import("./pages/Objectives/Objectives"));
const Guide = lazy(() => import("./pages/guide/guide"));

function App() {

  axios.defaults.headers.common['Content-Type'] = 'application/json';
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
        <Route path="/dashboard" element={<Protect>
          <Suspense fallback={<Loader />}>

          <Dashboard_layout />
          </Suspense>
          
          </Protect>}>
          <Route path="home" element={<Home_dash/>} />
          <Route path="info" element={<Info/>} />
          <Route path="exam" element={<Exam_dash/>} />
          <Route path="scale" element={<Scale/>} />
          <Route path="lesson/:order" element={<Lesson/>} />
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
  return <Provider  store={store}>

      <PersistGate loading={null} persistor={persistor}>

    <RouterProvider future={{ v7_startTransition: true }} router={router} />
    </PersistGate>
  </Provider>;
}

export default App;
