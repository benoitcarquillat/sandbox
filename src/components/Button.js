import { Button as MgtButton } from '@tymate/margaret';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonBase = props => (
  <MgtButton
    {...props}
    as={
      Boolean(props.as)
        ? props.as
        : Boolean(props.to && !props.disabled)
        ? Link
        : null
    }
  />
);

const Button = styled(ButtonBase)`
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;

  &:disabled {
    color: ${({ theme }) => theme.disabled};
    background-color: ${({ theme }) => theme.backgroundDisabled};
    cursor: not-allowed;
  }
`;

export default Button;
