import React from 'react';

function New_Table({ updated_data }) {
  return (
    <div>
      <h3>Updated Candidates</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Message</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {updated_data && updated_data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.full_name}</td>
              <td>{item.user_email}</td>
              <td>{item.user_mobile}</td>
              <td>{item.message}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default New_Table;

