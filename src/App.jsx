import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import { useState } from "react";
import ProductPage from "./Pages/ProductPage/ProductPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import BlogItemPage from "./Pages/BlogItemPage/BlogItemPage";
import './responsive.scss';

function App(props) {
  const [view,setView] = useState(true);
  const changeView = () =>{
    setView( !view )
  } 

  return (
    <BrowserRouter>
      <div className="app">
        <Header  changeView = {changeView} />
        <div className="body__container">
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="/category"  render={() => <CategoryPage view = {view}  />} />                 
          <Route path="/product"  render={() => <ProductPage/>} />  
          <Route path="/blog" render={()=> <BlogPage/>} />              
          <Route path="/blog_item" render={()=> <BlogItemPage/>} />              
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
