import { Container, Stack } from '@tymate/margaret';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.primary};
  padding: ${({ theme }) => theme.spacing()};
  color: white;
  width: 100%;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Stack>
          <Logo> Super logo</Logo>
        </Stack>
      </Container>
    </Wrapper>
  );
};

export default Header;
