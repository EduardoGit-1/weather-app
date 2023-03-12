const weatherReducer = (state, {type, payload}) =>{
    switch(type){
        case 'GET_WEATHER_SUCESS':
            return {
                ...state,
                weatherData : payload,
                error : null
            }
        case 'GET_WEATHER_FAIL':
            return {
                ...state,
                weatherData : {},
                error: payload
            }
        case 'GET_WEATHER_LOADING':
            return {
                ...state,
                loading: payload
            }
        case 'GET_WEATHER_CLEAR':
            return {
                weatherData: {}, 
                error: null, 
                loading: false
            }
            
        default:
            return state
    }
}
export default weatherReducer;