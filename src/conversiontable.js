import React from "react";

const data = [
    { currency: "Platinum (pp)", coin: "1" },
    { currency: "Gold (gp)", coin: "10" },
    { currency: "Electrum (ep)", coin: "20" },
    { currency: "Silver (sp)", coin: "100" },
    { currency: "Copper (cp)", coin: "1,000" }
  ]

function Conversiontable()   {
    <div>
        <table>
        <tr>
          <th>Currency Converter</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.currency}</td>
              <td>{val.coin}</td>
            </tr>
          )
        })}
      </table>
    </div>
}

export default Conversiontable