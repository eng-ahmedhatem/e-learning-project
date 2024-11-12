import Erorr_404 from "./component/eror-404/Erorr-404"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login___Register from "./pages/Login___Register/Login___Register"
function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Login___Register/>}/>
    <Route path="*" element={<Erorr_404/>}/>
  </Routes>
  </BrowserRouter>
  </>
  ) 
}

export default App
