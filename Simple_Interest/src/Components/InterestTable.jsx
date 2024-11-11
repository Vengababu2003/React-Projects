import React from 'react';

function InterestTable({ data }) {
  return (
    <div class="tabel_top_margin">
      <table border="1">
        <thead>
          <tr>
            <th>Month</th>
            <th>Interest</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.month}>
              <td >{item.month}</td>
              <td >{item.interest}</td>
              <td >{item.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InterestTable;
