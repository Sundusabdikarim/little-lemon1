import logo from './logo.svg';
import './App.css';
import Navbar from './Components/nav';
import Main from "./Components/header"
import Footer from "../src/Components/footer"
import Header from "../src/Components/main"


function App() {
  return(
    <div>
  <Navbar/>
  <Main/>
  <Header/>
  <Footer/>
  </div>
  );
}

export default App;
