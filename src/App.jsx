import "./App.scss"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import CategorySectionRow from "./components/CategorySectionRow/CategorySectionRow"
import CategorySectionRowProducts from "./components/CategorySectionRowProducts/CategorySectionRowProducts"
import BlogSection from "./components/BlogSection/BlogSection"


function App() {
  return (
    <div className="App">
      <Header />
      <div className="body__container">
        <CategorySectionRow categoryName="Recipes"/>
        <CategorySectionRowProducts categoryName="Best selling products"/>
        <CategorySectionRowProducts categoryName="Best from Farmers"/>
        <BlogSection/>
      </div>
      <Footer />
    </div>
  )
}

export default App
