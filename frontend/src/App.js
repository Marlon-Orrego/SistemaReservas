import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './styles';
import Login from './pages/Login';
import Inicial from './pages/Inicial';
import Register from './pages/Register';
import Asientos from './pages/Asientos';
import ProtectedRoute from './components/ProtectedRoute';
import './css/App.css'

function App() {
  return (
    <div className="min-h-screen bg-primary overflow">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className="">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={
                <ProtectedRoute>
                  <Asientos />
                </ProtectedRoute>
              } />
              <Route path='/' element={<Inicial />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/asientos' element={<Asientos />} /> 
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
export default App;

