import React, { Component } from 'react';

import { getSpecials } from './../api/getSpecials.js';

import Card from './Card.jsx';

export default class Specials extends Component {
  constructor(props) {
    super(props);

    this.state = { specials: '' };
  }

  componentDidMount() {
    getSpecials().then(res => {
      let specials = res.items.map((item, index) => {
        return (
          <div className="special" key={index}>
            <h3 className="special-ribbon">{item.fields.title}</h3>
            <h4>{item.fields.description}</h4>
          </div>
        );
      });

      this.setState({ specials: specials });
    });
  }

  render() {
    return (
      <div className="section">
        <h1 className="title">{this.props.title}</h1>
        <div className="section-content right">
          <div
            className="section-image"
            style={{ backgroundImage: `url(${this.props.image})` }}
          />
          <Card content={this.state.specials} />
        </div>
      </div>
    );
  }
}
