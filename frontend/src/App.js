import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Section from './pages/Section';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Ebooks from './components/Pdf/Pdf';
import Cgpa from './components/Cgpa/Cgpa';
import Timetable from './components/Timetable/Timetable';
import Newscenter from './components/Newscenter/Newscenter';
import ChangePassword from './components/changePassword/changePassword';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import UserDashboard from './pages/Userdashboard/UserDashboard';
import L1 from './components/Pdf/L1';
import L2 from './components/Pdf/L2';
import L1timetable from './components/Timetable/L1';
import L2timetable from './components/Timetable/L2';
import L1cgpa from './components/Cgpa/L1';
import L2cgpa from './components/Cgpa/L2';
import FirstL1 from './components/Cgpa/FirstL1';
import FirstL2 from './components/Cgpa/FirstL2';
import SecondL1 from './components/Cgpa/SecondL1';
import SecondL2 from './components/Cgpa/SecondL2';
import EnterEmail from './components/changePassword/enterEmail';
import ProfileScreen from './components/ProfileScreen';
import Mainpage from './components/Pdf/Mainpage';
import Download from './components/Pdf/Download';
import Settings from './components/Settings/Settings';
import DarkModeButton from './components/DarkModeButton';

function App() {
	return (
		<>
			<Router>
				<div className='container__not-tailwind'>
					<Routes>
						<Route exact path='/home' element={<Home />} />
						<Route exact path='/login' element={<Login />} />
						<Route exact path='/signup' element={<Signup />} />
						<Route exact path='/' element={<UserDashboard />} />
						<Route exact path='/ebook' element={<Ebooks />} />
						<Route exact path='/timetable' element={<Timetable />} />
						<Route exact path='/cgpa' element={<Cgpa />} />
						<Route exact path='/L1pdf' element={<L1 />} />
						<Route exact path='/L2pdf' element={<L2 />} />
						<Route exact path='/L1time' element={<L1timetable />} />
						<Route exact path='/L2time' element={<L2timetable />} />
						<Route exact path='/L1cgpa' element={<L1cgpa />} />
						<Route exact path='/L2cgpa' element={<L2cgpa />} />
						<Route exact path='/firstL1' element={<FirstL1 />} />
						<Route exact path='/firstL2' element={<FirstL2 />} />
						<Route exact path='/secondL1' element={<SecondL1 />} />
						<Route exact path='/secondL2' element={<SecondL2 />} />
						<Route exact path='/pdf/:id' element={<Download />} />
						<Route exact path='/news' element={<Newscenter />} />
						<Route exact path='/settings' element={<Settings />} />
						<Route exact path='email/passwordchange' element={<ChangePassword />} />
						<Route exact path='/email' element={<EnterEmail />} />
						<Route exact path='/about' element={<About />} />
						<Route exact path='/contact' element={<Contact />} />
						<Route exact path='/section' element={<Section />} />
						<Route exact path='/profilescreen' element={<ProfileScreen />} />
						<Route exact path='/mainpage' element={<Mainpage />} />
					</Routes>
				</div>
			</Router>
			<DarkModeButton display={'hidden'} />
			<ToastContainer />
		</>
	);
}

export default App;
