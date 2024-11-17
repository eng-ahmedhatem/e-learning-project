import Erorr_404 from "./component/eror-404/Erorr-404";
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Loader } from "./component";
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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
              {isLoading && <Loader/>}
               <Header/>
               <Home/>
                
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
