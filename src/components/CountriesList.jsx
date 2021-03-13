import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

class CountriesList extends Component {
  state = {
    countryArray: countries,
  };
  render() {
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {this.state.countryArray.map((country) => (
            <Link key={country.cca3} to={`/${country.cca3}`}>
              {country.flag} {country.name.common}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default CountriesList;
