import React from 'react';
import Package from './Package';
import './Packages.css';

const packages = [
  {
    labels: true,
    level: '\u200b',
    bed: '\u200b',
    prices: ['5 visits', '10 visits', '1 month', '3 months', '1 year'],
  },
  {
    level: 'Level 1, 2',
    bed: 'VIP Facial Beds',
    prices: [32, 39.99, 39.99, 104, 304],
  },
  {
    level: 'Level 3',
    bed: 'Mega Beds & Stand up',
    prices: [44, 64, 60, 154, 354],
  },
  {
    labels: true,
    level: '\u200b',
    bed: '\u200b',
    prices: ['5 visits', '10 visits', '1 month', '3 months', '1 year'],
  },
  {
    level: 'Level 4',
    bed: '500-600 Ergoline',
    prices: [54.99, 79.99, 69.99, 175, 374],
  },
  {
    level: 'Level 5',
    bed: 'High Pressure',
    prices: [74, 110, 99.99, 199, 499.99],
  },
];

export default props => (
  <div className="section">
    <h1 className="title">Packages</h1>
    <div className="package-wrapper">
      {packages.map((_package, index) => (
        <Package key={index} {..._package} />
      ))}
    </div>
  </div>
);
