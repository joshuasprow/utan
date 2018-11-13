import React from 'react';
import './Package.css';

export default ({ labels, level, bed, prices }) => (
  <div className={labels ? 'package labels' : 'package'}>
    <h2>{level}</h2>
    <h4>{bed}</h4>
    <ul>
      {prices.map((price, index) => (
        <li key={index}>{price}</li>
      ))}
    </ul>
  </div>
);
