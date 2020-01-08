import * as weathermanipulation from '../actiontypes/getweather';
const initialState ={
    gotWeather: false,
    plantNum: 0,
}

export tt function Player(state=initialState, action){
    switch(action.type){
        case weathermanipulation.GET_WEATHER:
            return [
                ...state{
                    gotWeather:true,
                    plantNum:1
                }
            ]
        case weathermanipulation.DEFAULT_WEATHER:
            return [
                ...state{
                    gotWeather:false,
                    plantNum:1
                }
            ]
        default:
            return state
    }
}