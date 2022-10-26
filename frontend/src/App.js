import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './styles';
import Login from './pages/Login';
import Inicial from './pages/Inicial';
import Register from './pages/Register';

function App() {
  return (
    <div className="bg-primary w-full overflow">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
     <div className="">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicial/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register'element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </div>
    </div>
  );
}
export default App;

