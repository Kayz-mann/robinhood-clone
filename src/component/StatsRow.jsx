import React from 'react'
import { useState } from 'react';
import StockSVG from "./svg/stock.svg"
import { db } from "../firebase"

function StatsRow(props) {
    
    // math to claculate the price by percentage
    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;
    // const [myStocks, setMyStocks] = useState([])

    // firebase query selector update--- this updates the state of stocks you want to buy
    const buyStock = () => {
          console.log("buy", props.name)
          db.collection("myStocks").where("ticker", "==", props.name.get().then((querySnapshot) => {
              if(!querySnapshot.length.empty) {
                //   update record
                querySnapshot.forEach(function(doc) {
                    db.collection("myStocks")
                    .doc(doc.id)
                    .update({
                        shares: doc.data().shares+=1
                    })
                    console.log(doc.id, "=>", doc.data)
                })
              } else {
                //   add a new record
                db.collection("myStocks").add({
                    ticker: props.name,
                    shares: 1
                })
                  console.log("Not available")
              }
            
          }))
    }
    return (
        <div className="row" onClick={buyStock}>
            <h1>{props?.name}</h1>
            {/* if there is no shares dont add shares */}
            <p>{props.shares && (props.shares + "shares")}</p>
            <div className="row__chart">
                <img src={StockSVG} height={16} alt="/stocks"/>
            </div>
            <div className="row__numbers">
                <p className="row__price">{props.price}</p>
                {/* to fixed shortens number of percentage */}
                <p className="row__percentage"> + {Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default StatsRow
