import getInitialPollution from '../../services/getInitialPollution';

// Initial State
const initialState = [];

// Actions
const INIT_POLLUTION = 'air_pollution/pollution/INIT_POLLUTION';
const INIT_FETCHING = 'air_pollution/pollution/INIT_FETCHING';

// Action Creators
export const addInitialPollution = () => async (dispatch) => {
  dispatch({ type: INIT_FETCHING });
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
