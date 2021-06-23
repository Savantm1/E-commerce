import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import BlogPage from "./Pages/BlogPage/BlogPage";
import BlogItemPage from "./Pages/BlogItemPage/BlogItemPage";
import "./responsive.scss";
import MainPageContainer from "./Pages/MainPage/MainPageContainer";
import WithUrlDataCategory from "./Pages/CategoryPage/CategoryPageContainer";
import WithUrlProductPageContainer from "./Pages/ProductPage/ProductPageContainer";

function App(props) {
  const [view, setView] = useState(false);
  const changeView = () => {
    setView(!view);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="body__container">
          <Route path="/" exact render={() => <MainPageContainer />} />
          <Route
            path="/category/:category/bestSelling"
            render={() => (
              <WithUrlDataCategory
                view={view}
                changeView={changeView}
                bestSelling={true}
                bestFromFarmers={false}
              />
            )}
          />
          <Route
            path="/category/:category/bestFromFarmers"
            render={() => (
              <WithUrlDataCategory
                view={view}
                changeView={changeView}
                bestSelling={false}
                bestFromFarmers={true}
              />
            )}
          />
          <Route
            path="/category/:category/"
            exact
            render={() => (
              <WithUrlDataCategory view={view} changeView={changeView} />
            )}
          />
          <Route
            path="/category/:category/product/:product"
            render={() => (
              <WithUrlProductPageContainer
                view={view}
                changeView={changeView}
              />
            )}
          />
          <Route path="/blog" render={() => <BlogPage />} />
          <Route path="/blog_item" render={() => <BlogItemPage />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
