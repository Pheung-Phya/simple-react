import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Master from './layouts/Master';
import HomePage from './pages/homePage/views/HomePage';
import ProductPage from './pages/productPage/view/ProductPage';
import DetailProductPage from './pages/detailProductPage/view/DetailProductPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Master />} >
          <Route index element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/product/:brandSlug/:productSlug' element={<DetailProductPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;