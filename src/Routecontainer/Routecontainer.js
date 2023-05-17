
import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from '../Pages/Homepage/Homepage'

function Routecontainer() {
  return (
    <div>
         <BrowserRouter>
         
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        {/* <Route path='/future' element={<Future/>}/> */}

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routecontainer