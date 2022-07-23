import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import Section from './routes/Section'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Ebooks from './components/E-books/Ebooks';
import Newscenter from './components/Newscenter/Newscenter';
import ChangePassword from './components/changePassword/changePassword';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/ebook' element={<Ebooks/>}/>
        <Route exact path='/news' element={<Newscenter/>}/>
        <Route exact path='/passwordchange' element={<ChangePassword/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/section' element={<Section/>}/>
      </Routes>
    </>
  );
}

export default App;
