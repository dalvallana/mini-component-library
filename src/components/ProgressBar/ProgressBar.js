/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  padding: var(--bar-padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--bar-container-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${p => p.value}%;
  height: var(--bar-height);
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-radius: 4px 0 0 4px;
`;

const heights = {
  small: 8,
  medium: 12,
  large: 24,
};

const ProgressBar = ({ value = 0, size = 'medium' }) => {
  const val = value < 0 ? 0 : value > 100 ? 100 : value;
  const height = heights[size] || 12;
  const padding = size === 'large' ? 4 : 0;
  const containerRadius = size === 'large' ? 8 : 4;
  return (
    <Wrapper
      style={{
        '--bar-height': `${height}px`,
        '--bar-padding': `${padding}px`,
        '--bar-container-radius': `${containerRadius}px`,
      }}
    >
      <VisuallyHidden>{val}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          value={val}
          role="progressbar"
          aria-valuenow={val}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
