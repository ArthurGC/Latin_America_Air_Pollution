import getInitialPollution, { refactorData } from '../../services/getInitialPollution';

// Initial State
const initialState = [];

// Actions
export const INIT_POLLUTION = 'air_pollution/pollution/INIT_POLLUTION';

// Action Creators
export const addInitialPollution = () => async (dispatch) => {
  const pollution = await getInitialPollution();
  const pollutionData = await refactorData(pollution);
  dispatch({
    type: INIT_POLLUTION,
    payload: pollutionData,
  });
};

// Reducer
const pollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_POLLUTION:
      return action.payload;

    default:
      return state;
  }
};

export default pollutionReducer;
