import styles from "../styles";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { getVuelos } from "../pages/UseFetch";

const Vuelos = () => {
  const [vuelos, SetVuelos] = useState(null);

  useEffect(() => {
    getVuelos(SetVuelos);
  }, []);

  return (
    <>
      {vuelos != null
        ? vuelos.map((vuelos) => (
            <section
              key={vuelos.Id_Vuelo}
              className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
            >
              <div className="flex-1 flex flex-col">
                <h2 className={styles.heading2}>
                  {vuelos.origen}-{vuelos.destino}
                </h2>
                <p className={`${styles.heading3} max-w-[470px] mt-5`}>
                  Fecha Salida
                </p>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  {moment(vuelos.Fecha_salida).utc().format("YYYY-MM-DD")}
                </p>
                <p className={`${styles.heading3} max-w-[470px] mt-5`}>
                  Fecha Llegada
                </p>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  {moment(vuelos.Fecha_llegada).utc().format("YYYY-MM-DD")}
                </p>
              </div>

              <div
                className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
              >
                <Button data={vuelos.Id_Vuelo}/>
              </div>
            </section>
          ))
        : "No hay Vuelos"}
    </>
  );
};

export default Vuelos;
