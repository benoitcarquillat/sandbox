import { Stack } from '@tymate/margaret';
import styled, { css } from 'styled-components';
import { GoogleSpinner, IosSpinner } from './templates';

const Wrapper = styled(Stack).attrs({
  alignX: 'center',
})`
  min-height: ${({ size }) => (Boolean(size) ? undefined : '120px')};
  background: lightGray;
  transform: scale(
    calc(${({ size }) => size || 64} / 64),
    calc(${({ size }) => size || 64} / 64)
  );

  ${({ variant }) =>
    variant === 'button' &&
    css`
      display: block;
      margin-right: ${({ theme }) => theme.spacing(1.5)};
      min-height: 0;
    `};

  ${({ variant }) =>
    variant === 'inline' &&
    css`
      display: block;
      transform: scale(
        calc(${({ size }) => size || 20} / 64),
        calc(${({ size }) => size || 20} / 64)
      );
      min-height: 0;
      margin-right: 1rem;
    `};
`;

// const Spin = styled.div`
//   > div {
//     background-color: ${({ theme }) => theme.spinner?.color || theme.primary};

//     ${({ variant }) =>
//       (variant === 'button' || variant === 'inline') &&
//       css`
//         background-color: currentColor;
//       `};

//     ${({ color }) =>
//       Boolean(color) &&
//       css`
//         background-color: ${({ theme }) =>
//           theme.colors?.[color] || theme?.[color]};
//       `};
//   }
// `;

// const getDotsCount = animation => {
//   switch (animation) {
//     case 'ball-clip-rotate':
//   }
// };

const Spinner = ({ animation, variant, size }) => {
  return (
    <>
      Google
      <Wrapper variant={variant} size={size}>
        <GoogleSpinner size={64} />
      </Wrapper>
      IOS
      <Wrapper>
        <IosSpinner size={64} />
      </Wrapper>
    </>
  );
};

export default Spinner;
