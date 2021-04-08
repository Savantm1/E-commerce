import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="body__container">
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="/category" render={() => <CategoryPage />} />

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
