import React from 'react';
import '../css/sillas.css';

function Sillas() {
    return (
            
            <html lang="en">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>  
            </head>
            <body className='seats'>
            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small className='showcasetext'>N/A</small>
                </li>
  
                <li>
                    <div className="seat selected"></div>
                    <small className='showcasetext'>Seleccionada</small>
                </li>
  
                <li>
                    <div className="seat occupied"></div>
                    <small className='showcasetext'>Ocupada</small>
                </li>
            </ul>
  
            <div className="container"/>
                <div className="row">
                    <div className="bseat"></div>
                    <div className="bseat"></div>
                    <div className="bseat"></div>
                    <div className="bseat"></div>         
                </div>  
                <div className="row">
                    <div className="bseat"></div>
                    <div className="bseat"></div>
                    <div className="bseat"></div>
                    <div className="bseat"></div>            
                </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
                <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
  
            <p className="text">
                Has seleccionado <span id="count">0</span> asientos por el precio de $<span id="total">0</span>
            </p>
            <script src="script.js"></script>

            </body>
            </html>
    )
}

export default Sillas