
import './App.css';
import Navbar from './Componenets/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop.js'
import  Product from './pages/Product.js'
import  ShopCategory from './pages/Shopcategory.js'
import  Cart from './pages/Cart.js'
import  LoginSignUp from './pages/LoginSignup.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componenets/Footer/Footer.js';
import VideoPlayer from './Video.js';

function App() {
 

  return (
    <div>
 
 <BrowserRouter>
 <Navbar/>
   <Routes>

   <Route path="/" element={<VideoPlayer/>} />
   
    <Route path='/shop' element= {<Shop/>}/>
    <Route path='/mens' element={<ShopCategory  category='men'/>}/>
    <Route path='/womens' element={<ShopCategory  category='women'/>}/>
    <Route path='/kids' element={<ShopCategory  category='kid'/>}/>
    <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignUp/>}/>
    
   </Routes>
   <Footer/>
   </BrowserRouter>
   

    </div>

  );
}

export default App;
