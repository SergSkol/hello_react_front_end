import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from './redux/actions';

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

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
