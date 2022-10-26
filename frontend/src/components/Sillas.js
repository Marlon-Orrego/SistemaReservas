import React from 'react';
import '../css/sillas.css';

function Sillas() {
    return (
        <div>
            <div>
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="style.css"/>
                <title>Sillas</title>
            </head>
            <body>
            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>N/A</small>
                </li>
  
                <li>
                    <div className="seat selected"></div>
                    <small>Seleccionada</small>
                </li>
  
                <li>
                    <div className="seat occupied"></div>
                    <small>Ocupada</small>
                </li>
            </ul>
  
            <div className="container"/>
                <div className="row">
                    <div className="bseat"></div>
                    <div className="bseat"></div>
                    <div className="bseat"></div>
                    <div className="bseat"></div>         
                </div>  
            <div className="container"/>
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

        </div>
        </div>
    )
}

export default Sillas