import React from "react";

const data = [
    { currency: "Platinum (pp)", coin1: "1", coin2: "1/10", coin3: "1/20", coin4: "1/100", coin5: "1/1,000" },
    { currency: "Gold (gp)", coin1: "10", coin2: "1", coin3: "1/2", coin4: "1/10", coin5: "1/100" },
    { currency: "Electrum (ep)", coin1: "20", coin2: "2", coin3: "1", coin4: "1/5", coin5: "1/50" },
    { currency: "Silver (sp)", coin1: "100", coin2: "10", coin3: "5", coin4: "1", coin5: "1/10" },
    { currency: "Copper (cp)", coin1: "1,000", coin2: "100", coin3: "50", coin4: "10", coin5: "1" }
  ]

function ConversionTable()   {
  return  (
    <div>
        <table>
        <tr>
          <th>Currency Converter</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.currency}</td>
              <td>{val.coin1}</td>
              <td>{val.coin2}</td>
              <td>{val.coin3}</td>
              <td>{val.coin4}</td>
              <td>{val.coin5}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default ConversionTable