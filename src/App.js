import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { APP_ROUTES } from './constants/routes';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductPage/ProductsPage';
import IntroducePage from './pages/IntroducePage/IntroducePage';
import NewsPage from './pages/NewsPage/NewsPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App font-maven-font">
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Navigate to={APP_ROUTES.HOME_PAGE}></Navigate>}></Route>
        <Route path={APP_ROUTES.HOME_PAGE} element={<HomePage></HomePage>}></Route>
        <Route path={APP_ROUTES.PRODUCT_PAGE} element={<ProductsPage></ProductsPage>}></Route>
        <Route path={APP_ROUTES.INTRODUCES_PAGE} element={<IntroducePage></IntroducePage>}></Route>
        <Route path={APP_ROUTES.NEWS_PAGE} element={<NewsPage></NewsPage>}></Route>
        <Route path={APP_ROUTES.CONTACT_PAGE} element={<ContactPage></ContactPage>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
