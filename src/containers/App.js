import React, { Component,PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import * as weatherActionCreators from '../actions/getweather'
import {connect} from 'react-redux';
import Plant from '../components/plant.js';
import Weather from '../components/weather.js';
import '../App.css';

class App extends Component{

  static propTypes = {
    weather: this.propTypes.object.isRequired
  }
render(){
  const {dispatch, Weather }= this.props
  const getweather = bindActionCreators(weatherActionCreators.getweather,dispatch);
  const defaultWeather = bindActionCreators(weatherActionCreators.defaultWeather,dispatch)

  const Plants = weather.map((weather,index))=>{
    <Plant
    getweather={getweather}
    defaultWeather={defaultWeather}
    />
  }
  return (
    <div style={{height: '5em', width: '5em', backgroundColor: 'red'}}>
        <h2>main container</h2>
        
        {Plants}
    </div>
    );
  }
}

const mapStateToProps = state =>(
  {
    weather: state
  }
);

export default connect(mapStateToProps)(App)