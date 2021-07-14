import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: ${p => (p.isLarge ? '2px' : '1px')} solid ${COLORS.black};
  color: inherit;
  font-size: ${p => (p.isLarge ? 18 / 16 : 14 / 16)}rem;
  font-weight: 700;
  padding-left: ${p => (p.isLarge ? 32 : 24)}px;
  width: ${p => p.width}px;
  outline-offset: 3px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
`;

const IconInput = ({ id, label, icon, width = 250, size, placeholder }) => {
  const isLarge = size === 'large';
  return (
    <Wrapper>
      <IconWrapper>
        <Icon
          id={icon}
          strokeWidth={isLarge ? 2 : 1}
          size={isLarge ? 20 : 14}
        />
      </IconWrapper>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <StyledInput
        id={id}
        placeholder={placeholder}
        isLarge={isLarge}
        width={width}
      ></StyledInput>
    </Wrapper>
  );
};

export default IconInput;
