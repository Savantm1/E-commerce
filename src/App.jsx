import "./App.scss"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Filters from "./components/Filters/Filters"
import InputText from "./components/UI/InputText/InputText"


function App() {
  return (
    <div className="App">
      <Header />
      <div className="body__container">
        <Filters/>
        <InputText title="hello"/>
      </div>
      <Footer />
    </div>
  )
}

export default App
