import { FETCH_WEATHER } from '../actions/fetch-weather.jsx';
//Like component based state, app state should not be mutated
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            //ES6
            return [ action.payload.data, ...state ];

    }
    return state
}