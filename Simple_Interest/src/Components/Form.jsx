import React, { useState } from 'react';
import InterestTable from './InterestTable';

function Form() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interestData, setInterestData] = useState([]);
  const [totalInterest, setTotalInterest] = useState();

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseInt(time);

    const monthlyInterest = (P * R) / 100;
    const data = [];

    for (let month = 1; month <= T; month++) {
      const interest = monthlyInterest;
      const totalAmount = P + (monthlyInterest * month);
      data.push({ month, interest, totalAmount });
    }

    setInterestData(data);
    setTotalInterest(monthlyInterest * T); 
  };

  const resetForm = () => {
    setPrincipal("");
    setRate("");
    setTime("");
    setInterestData([]);
  };

  return (
    <div class="labels">
      <form>
        <div>
          <label htmlFor="Principal" className="data1">Principal Amount:</label>
          <input type="number" id="Principal" name="Principal" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="Rate" className="data2">Rate of Interest:</label>
          <input type="number" id="Rate" name="Rate" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="Time" className="data3">Time Duration:</label>
          <input type="number" id="Time" name="Time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <br />
        <button type="button" class="button" onClick={calculateInterest}>Calculate Interest</button>
        <button type="button" class="button reset-button" onClick={resetForm} >Reset</button> 
      </form>

  
      {interestData.length > 0 && (
        <div>
          <h3>Total Interest: {totalInterest}</h3>
          <h3>Interest per Month: {interestData[0].interest}</h3>
        </div>
      )}

      <InterestTable data={interestData} />
    </div>
  );
}

export default Form;
