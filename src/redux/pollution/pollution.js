import getInitialPollution from '../../services/getInitialPollution';

// Initial State
const initialState = [];

// Actions
export const INIT_POLLUTION = 'air_pollution/pollution/INIT_POLLUTION';

// Action Creators
export const addInitialPollution = () => async (dispatch) => {
  const pollution = await getInitialPollution();
  dispatch({
    type: INIT_POLLUTION,
    payload: pollution,
  });
};

// Reducer
const pollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_POLLUTION:
      return [...action.payload];

    default:
      return state;
  }
};

export default pollutionReducer;
