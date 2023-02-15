import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import LoginForm from './loginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Regristationform from './registrationForm';
function App() {
  return (
    <div className="App d-flex justify-content-center">

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Regristationform/>}></Route>
          <Route path='/registration' element={<Regristationform/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
