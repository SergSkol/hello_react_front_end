import axios from 'axios';

export const fetchGreeting = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/greeting');
  dispatch({ type: 'FETCH_GREETING', payload: response.data.message });
};
