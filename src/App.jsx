import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import CartWidget from './components/CartWidget.jsx' 
import Footer from './components/Footer.jsx'


function App() {
 

  return (
    <>
      <NavBar />
      <div className="container mx-auto">
      <ItemListContainer greeting="Welcome to our Pizza Shop!" />
  
      </div>
      
      <Footer />
    </>
  )
}

export default App
