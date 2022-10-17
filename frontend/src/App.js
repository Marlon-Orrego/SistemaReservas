import styles from './styles';
import Navbar from './components/Navbar';
import Vuelos from './components/vuelos';
function App() {
  return (
    <div className="bg-primary w-full overflow">
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Vuelos />
      </div>
    </div>
    </div>
  );
}
export default App;
