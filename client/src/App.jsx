import Erorr_404 from "./component/eror-404/Erorr-404"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<h1 className="text-3xl font-bold underline">Home Page</h1>}/>
    <Route path="*" element={<Erorr_404/>}/>
  </Routes>
  </BrowserRouter>
  </>
  ) 
}

export default App
