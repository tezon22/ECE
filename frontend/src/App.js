import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Section from './pages/Section'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Ebooks from './components/Pdf/Pdf';
import Timetable from './components/Timetable/Timetable';
import Newscenter from './components/Newscenter/Newscenter';
import ChangePassword from './components/changePassword/changePassword';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import UserDashboard from './pages/Userdashboard/UserDashboard';
import L1 from './components/Pdf/L1';
import L2 from "./components/Pdf/L2";
import L1timetable from "./components/Timetable/L1";
import L2timetable from "./components/Timetable/L2";
import EnterEmail from './components/changePassword/enterEmail';
import ProfileScreen from './components/ProfileScreen';


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/" element={<UserDashboard />} />
            <Route exact path="/ebook" element={<Ebooks />} />
            <Route exact path="/timetable" element={<Timetable />} />
            <Route exact path="/L1pdf" element={<L1 />} />
            <Route exact path="/L2pdf" element={<L2 />} />
            <Route exact path="/L1time" element={<L1timetable />} />
            <Route exact path="/L2time" element={<L2timetable />} />

            <Route exact path="/news" element={<Newscenter />} />
            <Route
              exact
              path="email/passwordchange"
              element={<ChangePassword />}
            />
            <Route exact path="/email" element={<EnterEmail />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/section" element={<Section />} />
            <Route exact path="/profilescreen" element={<ProfileScreen />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App
