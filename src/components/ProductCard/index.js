import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import SvgIcon from '../SvgIcon';
import SecondaryButton from '../Button/Secondary';
import { formatMoney } from '../../utils/currencyFormatter';

import {
  Container,
  Header,
  Content,
  ContentInfo,
  ProductInfo,
  Title,
  Description,
  ActionContainer,
  Price,
  Wrapper,
} from './styles';

const ProductCard = ({ plate, onDelete }) => {
  const {
    image,
    name,
    description,
    price,
  } = plate || {};
  return (
    <Container>
      <Header>
        <Image image={image} width="100%" height="120px" />
      </Header>
      <Content>
        <ContentInfo>
          <ProductInfo>
            <Wrapper>
              <Title title={name}>{name}</Title>
              <Price>{formatMoney(price)}</Price>
            </Wrapper>
            <Description title={description}>{description}</Description>
          </ProductInfo>
        </ContentInfo>
        <ActionContainer>
          {/* <SecondaryButton>
            <SvgIcon
              color="#3FA99B"
              icon="EDIT_ICON"
              width={16}
              height={16}
              margin="0 11px 0 0"
            />
            Editar
          </SecondaryButton> */}
          <SecondaryButton onClick={onDelete}>
            <SvgIcon
              color="#3FA99B"
              icon="DELETE_ICON"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              margin="0 11px 0 0"
            />
            Excluir
          </SecondaryButton>
        </ActionContainer>
      </Content>
    </Container>
  );
};

ProductCard.propTypes = {
  plate: PropTypes.shape({
    price: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductCard;
