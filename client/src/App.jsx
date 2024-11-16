import Erorr_404 from "./component/eror-404/Erorr-404";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Loader } from "./component";
const Login___Register = lazy(() =>
  import("./pages/Login___Register/Login___Register")
);
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
               <Header/>
                
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
