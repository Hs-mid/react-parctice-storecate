import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './component/Detail';
import Incart from './component/Incart';
import Cat from './pages/Cat';
import Home from './pages/Home';
import Navbar from './pages/Navbar'
import Product from './pages/Product';
 


function App() {
  return (
  
    <div className="App container-fluid">
     <Navbar/>
     <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Cat' element={<Cat/>}/>
          <Route path='/Detail/:id' element={<Detail/>}/>
          <Route path='/Incart' element={<Incart/>}/>
          <Route path='/Incart/:id' element={<Incart/>}/>
     </Routes>
    </div>
  );
}

export default App;
