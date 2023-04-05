import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchGreeting from './redux/actions';

function Greeting({ greeting, fetchGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  if (!greeting) {
    return <div>Loading...</div>;
  }

  return <div>{greeting}</div>;
}

const mapStateToProps = (state) => ({ greeting: state.greeting });

Greeting.propTypes = {
  greeting: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
    }),
  ).isRequired,
  fetchGreeting: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
