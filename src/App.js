import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import ContainerOutsideExample from './componant/MyNav';
import Home from './padges/Home';
import ProdPage from'./padges/ProdPage';
import Cart from './padges/Cart';
import Signin from './padges/Signin';
import SignUp from'./padges/SignUp';
import About from './padges/About';
import MyFooter from './componant/MyFooter';
import AllUsersTable from './componant/AllUsers';
import Add from './componant/Add';
import Edit from './componant/Edit';
function App() {
  return (
    <div className="App">
      <ContainerOutsideExample/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/ProdPage' element={<ProdPage/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/AllUsers' element={<AllUsersTable/>}></Route>
        <Route path='/create' element={<Add/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
      <MyFooter/>
    </div>
  );
}

export default App;
