import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './Components/StartingPage';
import UserProfile from './Components/UserProfile';

import CoachRegistration from './Components/Register/CoachRegistration';
import UserRegistration from './Components/Register/UserRegistration';
import CoachSignup from './Components/Login/CoachSignup';
import UserSignup from './Components/Login/UserSignup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<StartingPage />} />

        <Route path='user_profile' element={<UserProfile />} />

        <Route path='registerCoach' element={<CoachRegistration />} />
        <Route path='registerUser' element={<UserRegistration />} />
        <Route path='coachSignup' element={<CoachSignup />} />
        <Route path='userSignup' element={<UserSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
