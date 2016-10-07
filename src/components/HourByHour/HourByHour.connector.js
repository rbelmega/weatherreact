import { asyncConnect } from 'redux-connect';
import { fetchWeather }from '../../actions/weatherActions';

const mapStateToProps = ({ hourByHour }) => ({
    ...hourByHour
});

export default asyncConnect([{
    promise: ({ store: { dispatch } }) =>
        dispatch(fetchWeather())
}], mapStateToProps);
