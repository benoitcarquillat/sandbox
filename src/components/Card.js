import styled from 'styled-components';
import Button from 'components/Button';
import { Stack } from '@tymate/margaret';
import EventBus, { actions } from 'utils/Evenbus';

const Wrapper = styled.div`
  border: 1px solid #dedede;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Card = () => {
  const buyProduct = () => {
    EventBus.dispatch(actions.ADD_PRODUCT, { message: 'coupone applied' });
  };

  return (
    <Wrapper>
      <Stack direction="column" gutterSize={0.5}>
        <div style={{ fontWeight: 700, fontSize: '16px' }}>Mon Produit</div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, ex.
        </div>
        <Button onClick={() => buyProduct()}> buy me ! </Button>
      </Stack>
    </Wrapper>
  );
};

export default Card;
