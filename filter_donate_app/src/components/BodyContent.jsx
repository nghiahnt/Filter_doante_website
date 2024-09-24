/* eslint-disable no-prototype-builtins */
import axios from "axios";
import { useEffect, useState } from "react";
import "./BodyContent.css";

function BodyContent() {
  const [data, setData] = useState([]);

  // Hàm chuẩn hóa key
  function normalizeKeys(obj) {
    const normalizedObj = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Làm sạch key
        const cleanedKey = key
          .replace(/[^a-zA-Z0-9_]/g, "") // Loại bỏ ký tự không hợp lệ
          .toLowerCase() // Chuyển về chữ thường
          .replace(/\s+/g, "_"); // Thay thế khoảng trắng bằng dấu gạch dưới

        normalizedObj[cleanedKey] = obj[key]; // Gán giá trị cho key đã chuẩn hóa
      }
    }

    return normalizedObj;
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        const normalizedData = res.data.data.map(normalizeKeys);
        setData(normalizedData);
      })
      .catch((error) => console.error(error));
  }, []);

  data.length !== 0 && console.log(data);

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-text">Filter Donate App</h1>
      </div>

      {/* Search form */}
      <div className="search-wrapper">
        <h2 className="search-title">Filter value</h2>
        <div className="search-form">
          <button className="search-size search-date">Select date</button>
          <input
            type="text"
            className="search-size search-amount"
            placeholder="Enter the amount"
          />
          <input
            type="text"
            className="search-size search-contentTransfer"
            placeholder="Enter the content transfer"
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* Result table */}
      <div className="result-wrapper">
        <table className="result-table">
          <thead className="result-tableHeader">
            <tr>
              <th>Date</th>
              <th>Trans_no</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody className="result-data">
            {data.length !== 0 &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.date_time.split("_")[0]}</td>
                  <td className="textCenter">{item.trans_no}</td>
                  <td>{item.credit}</td>
                  <td className="textCenter">{item.debit}</td>
                  <td>{item.detail}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BodyContent;
