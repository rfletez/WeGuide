import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartingPage from './Components/StartingPage';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartingPage />}>
          <Route index element={<StartingPage />} />
          <Route path='user_profile' element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
