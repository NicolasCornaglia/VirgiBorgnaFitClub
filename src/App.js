import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Dance from './components/Dance'
import Comedy from './components/Comedy'
import FAQ from './components/FAQ'
import Galery from './components/Galery'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dance' element={<Dance />} />
          <Route path='/comedy' element={<Comedy />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/galery' element={<Galery />} />
        </Route>
      </Routes> 
      
    </div >
  );
}

export default App;
