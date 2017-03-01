
// api end point
import api from '../../api/api-mock';

// if api end point success, update app state with data
export const getDataSuccess = (data) => {
  return {
    type: 'getData',
    data,
  };
};

// get data from api endpoint
export const getData = () => {
  return (dispatch) => {
    return api.getData()
      .then(data => dispatch(getDataSuccess(data)))
      .catch((error) => {
        throw (error);
      });
  };
};

// handle user interaction
export const handleEvent = (value) => {
  return {
    type: 'handleEvent',
    value,
  };
};
