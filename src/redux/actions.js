import axios from 'axios';

const fetchGreeting = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/greeting');
  dispatch({ type: 'FETCH_GREETING', payload: response.data.message });
};

export default fetchGreeting;
