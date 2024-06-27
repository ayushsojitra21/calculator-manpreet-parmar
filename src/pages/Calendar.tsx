import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Calendar = () => {
  const [isScenarioOpen, setIsScenarioOpen] = useState(false);
  const [isMortgageDetailsOpen, setIsMortgageDetailsOpen] = useState(false);

  const toggleScenario = () => {
    setIsScenarioOpen(!isScenarioOpen);
  };

  const toggleMortgageDetails = () => {
    setIsMortgageDetailsOpen(!isMortgageDetailsOpen);
  };

  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Profits',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="LONG TERM CASH FLOW" />
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <table style={{ border: '1px solid black', width: '100%', marginBottom: '20px' }}>
            <thead>
              <tr onClick={toggleScenario} style={{ cursor: 'pointer' }}>
                <th style={{ backgroundColor: '#d3d3d3', textAlign: 'left', padding: '10px' }}>Scenario 1</th>
              </tr>
            </thead>
            {isScenarioOpen && (
              <>
                <thead>
                  <tr onClick={toggleMortgageDetails} style={{ cursor: 'pointer' }}>
                    <th style={{ backgroundColor: '#d3d3d3', textAlign: 'left', padding: '10px' }}>Mortgage Details</th>
                  </tr>
                </thead>
                {isMortgageDetailsOpen && (
                  <tbody>
                    <tr>
                      <td style={{ padding: '10px' }}>
                        <label htmlFor="address">INFO: ○ Purchase Price: Numeric input for the total cost of purchasing the property.
○ Closing Cost: Numeric input for additional costs incurred during the transaction.
The default number in there as 2% closing cost
○ Loan Toggle: A slider or checkbox to select if financing is used. (Default yes
loan needed)
○ Down Payment: Numeric input or percentage slider that becomes active if the
loan is selected. Users can input either a percentage of the purchase price or a
fixed amount. (default to 20%)
○ Interest Rate: Numeric input for the annual interest rate of the loan, active if a
loan is selected. (extra: plug in API to get current rate of any bank)
○ Amortization Period: Numeric input for the duration over which the loan will be
repaid, in years, active if a loan is selected. (default to 25 years)
 </label>
                        <input type="text" id="address" name="address" style={{ width: '100%' }} />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px' }}>Stabilization Repair</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px' }}>Income</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px' }}>Expenses</td>
                    </tr>
                  </tbody>
                )}
              </>
            )}
          </table>
        </div>
        <div style={{ flex: 2 }}>
          <div style={{ border: '1px solid black', height: '400px', padding: '10px' }}>
            <h2>Results</h2>
            <p>
              {/* Placeholder for results content */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Proin ac consequat leo. Curabitur sagittis nisi nec quam pulvinar, nec pulvinar velit vehicula.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Profits Over Time</h2>
        <div style={{ border: '1px solid black', height: '300px', padding: '10px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
          Save
        </button>
        <button style={{ padding: '10px 20px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '4px' }}>
          New Scenario
        </button>
      </div>
    </DefaultLayout>
  );
};

export default Calendar;
