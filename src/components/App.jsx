import React from 'react';
import beachLady from './../img/beach-lady.jpg';
import palms from './../img/palms.png';
import AboutUs from './AboutUs.jsx';
import './App.css';
import Banner from './Banner.jsx';
import Locations from './Locations.jsx';
import Specials from './Specials.jsx';

export default () => (
  <div>
    <Banner />
    <Locations />
    <Specials title="Specials" image={palms} />
    <AboutUs
      title="About Us"
      content={
        <div>
          <p className="card-description">
            U Tan is Southwest Michigan's largest tanning facility, featuring 30
            tanning units, a state-of-the-art facility, and great customer
            service. U Tan has been selected as a Top 250 Tanning Facility in
            the United States in both 2008 and 2009 as well as the Mattawan 2016
            Business of the Year. We continually strive to bring the top
            technology in tanning to our customers.
          </p>
          <div className="card-grid">
            <div className="card-grid__tile">
              <h3>Mystic Tan</h3>
              <p>
                The 30 second UV-free sunless tan--an instant tan that's great
                for any special occasion (wedding, prom, party, etc.)
              </p>
            </div>
            <div className="card-grid__tile">
              <h3>Hydro Massage Bed</h3>
              <p>
                A great 30 minute warm-water massage--recommended by the
                Chiropractic Industry
              </p>
            </div>
            <div className="card-grid__tile">
              <h3>High Pressure VHR Beds</h3>
              <p>
                A fast, effective tan that provides instant gratification in
                just ten or fifteen minutes.
              </p>
            </div>
            <div className="card-grid__tile">
              <h3>Regular Beds</h3>
              <p>For your base tan</p>
            </div>
            <div className="card-grid__tile">
              <h3>No Appointments at U Tan</h3>
              <p>See our hours of operation above</p>
            </div>
            <div className="card-grid__tile">
              <h3>Great Customer Service</h3>
              <p>
                Our staff is certified by Smart Tan, the only behavior-based,
                interactive training program in the industry.
              </p>
            </div>
          </div>
        </div>
      }
      image={beachLady}
    />
  </div>
);
