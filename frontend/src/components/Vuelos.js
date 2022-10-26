import styles from "../styles";
import Button from "./Button";

const Vuelos = () => (
    <><><section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
          <div className="flex-1 flex flex-col">
              <h2 className={styles.heading2}>Medellín-Titiribí</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Duración: 30 Minutos
              </p>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Fecha: 27/01/2022
              </p>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Asientos: 50
              </p>
          </div>
  
          <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
              <Button />
          </div>
      </section><section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
              <div className="flex-1 flex flex-col">
                  <h2 className={styles.heading2}>Medellín-Cartagena</h2>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                      Duración: 45 Minutos
                  </p>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                      Fecha: 27/01/2022
                  </p>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                      Asientos: 50
                  </p>
              </div>
  
              <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                  <Button />
              </div>
          </section></><section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
              <div className="flex-1 flex flex-col">
                  <h2 className={styles.heading2}>Cali-Barranquilla</h2>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                      Duración: 60 Minutos
                  </p>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                      Fecha: 15/08/2022
                  </p>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                      Asientos: 50
                  </p>
              </div>
  
              <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                  <Button />
              </div>
          </section></>
  
    
  );
  
  export default Vuelos; 