import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    //make 'this' the SearchBar object for the callback on the form input
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    //Fetch weather data
    this.props.fetchWeather(this.state.term);

    //set input to blank after form submission
    this.setState({term: ''});
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="Get a five-day forecast in your favorite cities"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // this causes the action creator, whenever its called and returns an action
  // bindActionCreators makes sure the action flows down into the middleware and then the reducers
  return bindActionCreators({fetchWeather}, dispatch);
}

// pass in null to let redux know that no state is needed here.
export default connect(null, mapDispatchToProps)(SearchBar);
