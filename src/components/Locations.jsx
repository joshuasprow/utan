import React, { Component } from 'react';

import { getLocations } from './../api/getLocations.js';
import { getLocationIds } from './../api/getLocationIds.js';

import Location from './Location.jsx';

export default class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = { locations: '' };
  }
  componentWillMount() {
    getLocationIds().then(res => {
      const idArr = res.items.map(location => {
        let placeId = location.fields.placeId;
        let imageId = '';
        let ribbon = '';

        if (location.fields.image) {
          imageId = location.fields.image.sys.id;
        }

        if (location.fields.ribbon) {
          ribbon = location.fields.ribbon;
        }

        return {
          placeId: placeId,
          imageId: imageId,
          ribbon: ribbon,
        };
      });

      const locationsPre = idArr.map((location, index) => {
        return (
          <Location
            key={index}
            imageId={location.imageId}
            ribbon={location.ribbon}
            open={true}
          />
        );
      });

      this.setState({ locations: locationsPre });

      const locations = idArr.map((idObj, index) => {
        const location = getLocations(idObj.placeId).then(_res => {
          const phoneNice = _res.formatted_phone_number;
          const phone = phoneNice.replace(/\D/g, '');
          const hours = _res.opening_hours.weekday_text.map((day, _index) => {
            const _day = day.split(': ')[0];
            const hours = day.split(': ')[1];

            return (
              <p className="hours" key={_index}>
                <span className="hours-day">{_day}</span>
                <span className="hours-hours">{hours}</span>
              </p>
            );
          });

          return (
            <Location
              address={_res.formatted_address}
              className="location"
              hours={hours}
              imageId={idObj.imageId}
              key={index}
              open={_res.opening_hours.open_now}
              phone={phone}
              phoneNice={phoneNice}
              placeId={_res.place_id}
              ribbon={idObj.ribbon}
              title={_res.name}
              url={_res.url}
            />
          );
        });

        return location;
      });

      Promise.all(locations).then(res => {
        this.setState({ locations: res });
      });
    });
  }

  render() {
    return (
      <div className="locations">
        <h1 className="title">Locations</h1>
        {this.state.locations}
      </div>
    );
  }
}
