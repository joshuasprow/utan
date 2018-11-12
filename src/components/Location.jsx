import React, { Component } from 'react';

import { getLocationImages } from './../api/getLocationImages.js';

export default class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = { title: 'title', content: 'content', url: '' };
  }

  componentDidMount() {
    if (this.props.imageId !== '') {
      getLocationImages(this.props.imageId).then(res => {
        this.setState({ url: res.fields.file.url });
      });
    }
    if (this.props.ribbon !== '') {
      this.setState({ ribbon: this.props.ribbon });
    }
  }

  render() {
    return (
      <div className="card-location">
        <div
          className="card-location__image"
          style={{ backgroundImage: `url(https:${this.state.url})` }}
        />
        <div className="card-location__content">
          {this.props.ribbon ? (
            <div className="card-location__ribbon">{this.props.ribbon}</div>
          ) : (
            ''
          )}
          <a
            className="card-location__link"
            href={this.props.url}
            target="_blank">
            <h2 className="card-location__title">{this.props.title}</h2>
            <h4 className="card-location__subtitle">{this.props.address}</h4>
          </a>
          <a
            className="card-location__phone-link"
            href={`tel:${this.props.phone}`}>
            <h4 className="card-location__subtitle">
              <span role="img" aria-label="phone">
                ☎
              </span>{' '}
              {this.props.phoneNice}
            </h4>
          </a>
          <div>
            {this.props.open ? (
              <h3 className="open">We're Open!</h3>
            ) : (
              <h3 className="closed">Sorry, We're Closed</h3>
            )}
            {this.props.hours}
          </div>
        </div>
      </div>
    );
  }
}
