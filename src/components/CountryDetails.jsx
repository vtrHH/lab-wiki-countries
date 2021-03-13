import React, { Component } from 'react';
import countries from '../countries.json';

import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  state = {
    country: null,
  };

  componentDidMount() {
    console.log('component did Mount');
    this.loadCountry();
  }

  componentDidUpdate(previousProps) {
    if (this.props.match.params.id !== previousProps.match.params.id) {
      this.loadCountry();
    }
  }

  loadCountry = () => {
    const country = countries.find(
      (item) => item.cca3 === this.props.match.params.id
    );
    console.log('country:', country);
    this.setState({ country: country });
  };

  filterByCca3 = (border) => {
    const country = countries.find((item) => item.cca3 === border);
    return country.name.common;
    console.log(country);
  };

  render() {
    return (
      <div>
        {this.state.country && (
          <div className="col-7">
            <h1>{this.state.country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ maxWidth: '30%' }}>Capital</td>
                  <td>{this.state.country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {this.state.country.borders.map((border) => (
                        <li>
                          <Link to={`/${border}`}>
                            {this.filterByCca3(border)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default CountryDetails;
