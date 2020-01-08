import * as weathermanipulation from '../actiontypes/getweather';

export const grabWeather = data =>{
    return{
        type: weathermanipulation.GET_WEATHER,
        data: "its sunny today"
    };
};

export const defaultWeather = data =>{
    return{
        type: weathermanipulation.DEFAULT_WEATHER,
        data: "default weather"
    }
}