import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allOrders`).then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
    <h3 className="title">Positions ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Qty.</th>
            <th>LTP</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                {/* <td>{stock.product}</td> */}
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                {/* <td>{stock.avg.toFixed(2)}</td> */}
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;