import Home from '../Components/pages/Home'
import Layout from '../Components/Layout/Layout'
import Nopage from '../Components/pages/Nopage'
import Dulce from '../Components/pages/Dulce'
import Salado from '../Components/pages/Salado'
import Cafe from '../Components/pages/Cafe'

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {  

  return (
    <>     
      <BrowserRouter>          
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='cafe' element={<Cafe/>}/>
            <Route path='dulce' element={<Dulce/>}/>
            <Route path='salado' element={<Salado/>}/>
            <Route path='*' element={<Nopage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
            
    </>
  );
}

export default App
