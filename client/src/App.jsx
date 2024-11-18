import Erorr_404 from "./component/eror-404/Erorr-404";
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import { Header, Loader } from "./component";
import Contact from "./pages/contact/Contact";
const Login___Register = lazy(() =>
  import("./pages/Login___Register/Login___Register")
);
import Home from "./pages/home/Home";
// import { Login___Register } from "./pages";
function App() {
 
  const [isLoading,setIsloding] = useState(true)
  useEffect(()=>{
    const tt = setTimeout(() => {
      setIsloding(false)
    }, 2000);
  },[])
  return (
    <>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route
            exact
            path="/contact-us"
            element={<Contact/>}/>
          <Route
            exact
            path="/"
            element={
              <>
              {isLoading && <Loader/>}
               <main className="bg-[#eff2f3]">

               <Home/>
               {/* <Contact/> */}
                
               </main>
              </>
            }
          />
          
          <Route exact path="/login-register" element={
            <Suspense fallback={<Loader />}>
              <Login___Register />
            </Suspense>
              } />
          <Route path="*" element={<Erorr_404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
