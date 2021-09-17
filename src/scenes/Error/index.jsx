import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ location }) => {
  const { status, code, message } = location.state;
  return (
    <>
      <h1>{status}</h1>
      <p>Code: {code}</p>
      <p>{message}</p>
    </>
  );
};

Error.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      status: PropTypes.number,
      code: PropTypes.string,
      message: PropTypes.string,
    }),
  }).isRequired,
};

export default Error;
