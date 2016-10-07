import HourByHour from './HourByHour';
import connector from './HourByHour.connector';

function composer(...funcs) {
    return (component) => funcs.reduce((prev, curr) => curr(prev), funcs[0](component));
}

export default composer(connector)(HourByHour);
