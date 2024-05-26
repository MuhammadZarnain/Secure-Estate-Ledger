
import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartTwo = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Users',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Land',
        backgroundColor: 'rgba(15, 72, 1, 0.6)',
        borderColor: 'rgba(25,121,2, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(25,121,2, 0.8)',
        hoverBorderColor: 'rgba(25,121,2, 1)',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    

    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default xl:col-span-4">
      <Bar data={data} options={options} />
      </div>
    
  
  );
};

export default ChartTwo;
