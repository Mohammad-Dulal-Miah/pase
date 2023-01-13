import './App.css';
import Categories from './components/Categories/Categories';
import Menubar from './components/MenuBar/Menubar';
import Products from './components/Products/Products';
import {Routes , Route} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Information from './components/Information/Information';
import Orders from './components/Orders/Orders';


function App() {
  return (
    <div>

       <Menubar></Menubar>
      

    <Routes>
      <Route path='/' element={<Products></Products>}></Route>
      <Route path='/home' element={<Products></Products>}></Route>
      <Route path="/categories" element={<Categories></Categories>}></Route>
      <Route path='/product' element={<Products></Products>}></Route>
      <Route path="/productInformation/:productId" element={<Information></Information>}></Route>
      <Route path='/orders' element={<Orders></Orders>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    
     </Routes>

     <Footer/>
    </div>
  );
}

export default App;
