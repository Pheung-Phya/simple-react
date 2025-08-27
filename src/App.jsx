import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Master from './layouts/Master';
import HomePage from './pages/homePage/views/HomePage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Master />} >
             <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;