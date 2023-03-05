import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Edit";
import View from "./View";

function App() {
  return  (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/view/:id" element={<View />}></Route>

      </Route>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;
