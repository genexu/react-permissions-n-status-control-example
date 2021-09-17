import React from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/react';

const style = css`
  padding: 2rem 0;
`;

const Main = ({ children }) => <main css={style}>{children}</main>;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
