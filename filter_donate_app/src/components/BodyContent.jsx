import "./BodyContent.css";

function BodyContent() {
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
            <tr>
              <td>24/09/24</td>
              <td>1</td>
              <td>100</td>
              <td>0</td>
              <td>nghia ckhoan</td>
            </tr>
            <tr>
              <td>24/09/24</td>
              <td>1</td>
              <td>100</td>
              <td>0</td>
              <td>nghia ckhoan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BodyContent;
