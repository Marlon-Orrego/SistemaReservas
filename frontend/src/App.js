import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./styles";
import Login from "./pages/Login";
import Inicial from "./pages/Inicial";
import Register from "./pages/Register";
import Asientos from "./pages/Asientos";
//import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/404";
import Loading from './components/Loading';
import "./css/App.css";

function App() {
  return (
    <div className="min-h-screen bg-primary overflow">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className="">
          <Loading>
            <BrowserRouter>
              <Routes>
                <Route path="/asientos" element={<Asientos />} />
                <Route path="/" element={<Inicial></Inicial>}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Loading>
        </div>
      </div>
    </div>
  );
}
export default App;
