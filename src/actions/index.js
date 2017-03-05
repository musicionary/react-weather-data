import axios from 'axios';

const API_KEY = '89f17c12732050af0fecc7fed7d43c39';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//export the constant to keep action types consistent with creators and reducers.  This convention helps prevent bugs.
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  //axios returns a promise - but doesn't contain any data
  // this comes from the action creator
  const request = axios.get(url);

  console.log('request:', request);

  //return an action
  return {
    //have to return a type
    type: FETCH_WEATHER,

    //payload is the promise from the action creator
    payload: request
  }
}
