import React from "react";

const formField = {
    
}

function ConversionInput()  {
    return  (
    <div style={formField}>
        <form className="ui form">
            <div className="field">
                <label id="copper">Copper</label>
                <input type="number" id="cp" className="coin"></input>

                <label id="silver">Silver</label>
                <input type="number" id="sp" className="coin"></input>

                <label id="electrum">Electrum</label>
                <input type="number" id="ep" className="coin"></input>
                
                <label id="gold">Gold</label>
                <input type="number" id="gp" className="coin"></input>

                <label id="plat">Platinum</label>
                <input type="number" id="pp" className="coin"></input>

                <label id="party">Party Size</label>
                <input type="number" id="partysize" className="coin"></input>
            </div>
            <button className="ui button blue">Convert</button>
        </form>
            
    </div>
    )
}

export default ConversionInput