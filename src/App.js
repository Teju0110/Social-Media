import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context";


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
