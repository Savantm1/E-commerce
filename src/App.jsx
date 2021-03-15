import "./App.scss"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Filters from "./components/Filters/Filters"


function App() {
  return (
    <div className="App">
      <Header />
      <div className="body__container">
        <Filters/>
      </div>
      <Footer />
    </div>
  )
}

export default App
