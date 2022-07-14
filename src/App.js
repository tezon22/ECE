import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import Section from './routes/Section'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/section' element={<Section/>}/>
      </Routes>
    </>
  );
}

export default App;
