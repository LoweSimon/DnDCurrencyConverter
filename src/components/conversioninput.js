import React from "react";

function ConversionInput()  {
    return  (
    <div>
        <form className="coinInput">
            <label id="copper">Copper</label>
            <input type="number" id="cp" className="coin"></input>

            <label id="silver">Silver</label>
            <input type="number" id="sp" className="coin"></input>

            <lable id="electrum">Electrum</lable>
            <input type="number" id="ep" className="coin"></input>
            
            <label id="gold">Gold</label>
            <input type="number" id="gp" className="coin"></input>

            <label id="plat">Platinum</label>
            <input type="number" id="pp" className="coin"></input>

            <label id="party">Party Size</label>
            <input type="number" id="partysize" className="coin"></input>
        </form>
    </div>
    )
}

export default ConversionInput