import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("https://zerodha-clone-s5ji.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  });
  return (
    <>
      {allOrders.length > 0 ? (
        <>
          <h3 className="title">Open Orders ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Product</th>
                <th>Qty.</th>
                <th>LTP</th>
                <th>Price</th>
                <th>Status</th>
              </tr>

              {allOrders.map((stock, index) => {
                const isBuy= stock.mode == "BUY" ? "BUY" : "SELL";
                return (
                  <tr key={index}>
                    <td>
                      {stock.date
                        ? new Date(stock.date).toLocaleTimeString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })
                        : "N/A"}
                    </td>
                    <td><button style={{opacity: "0.7", width: "45%", fontSize: "10px", padding: "3px 0px"}} className={isBuy}>{stock.mode}</button></td>
                    <td>{stock.name}</td>
                    <td>0 / {stock.qty}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td><button style={{opacity: "0.7", width: "70%", fontSize: "10px", padding: "3px 0px", cursor: "pointer"}}>OPEN</button></td>
                  </tr>
                );
              })}
            </table>
          </div>
        </>
      ) : (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
