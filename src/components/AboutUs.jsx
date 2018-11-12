import React from 'react';
import Card from './Card.jsx';

export default props => (
  <div className="section">
    <h1 className="title">{props.title}</h1>
    <div className="section-content left">
      <div
        className="section-image"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: 'right',
        }}
      />
      <Card content={props.content} />
    </div>
  </div>
);
