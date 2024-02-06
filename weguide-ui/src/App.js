import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './Components/StartingPage';
import UserProfile from './Components/UserProfile';

import coachLogin from './Components/Login/coachLogin';
import userLogin from './Components/Login/userLogin';
import registerCoach from './Components/Register/registerCoach';
import registerUser from './Components/Register/registerUser';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartingPage />}>
          <Route index element={<StartingPage />} />
          <Route path='user_profile' element={<UserProfile />} />

          <Route path='coachLoggingIn' element={<coachLogin />} />
          <Route path='userLoggingIn' element={<userLogin />} />
          <Route path='registerCoach' element={<registerCoach />} />
          <Route path='registerUser' element={<registerUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
