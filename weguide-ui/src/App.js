import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './Components/StartingPage';
import UserProfile from './Components/UserProfile';

import RegisterCoach from './Components/Register/RegisterCoach';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route index element={<StartingPage />} />
        <Route exact path='user_profile' element={<UserProfile />} />

        <Route path='registerCoach' element={<RegisterCoach />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
