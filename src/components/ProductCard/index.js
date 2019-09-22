import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import SvgIcon from '../SvgIcon';
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
  CustomButton,
  Price,
  Wrapper,
} from './styles';

const ProductCard = ({ plate }) => {
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
              <Title title="The Black Bpx">{name}</Title>
              <Price>{formatMoney(price)}</Price>
            </Wrapper>
            <Description title={description}>{description}</Description>
          </ProductInfo>
        </ContentInfo>
        <ActionContainer>
          <CustomButton>
            <SvgIcon
              color="#3FA99B"
              icon="EDIT_ICON"
              width={16}
              height={16}
              margin="0 11px 0 0"
            />
            Editar
          </CustomButton>
          <CustomButton>
            <SvgIcon
              color="#3FA99B"
              icon="DELETE_ICON"
              width={24}
              height={24}
              viewBox="-2 -1 20 20"
              margin="0 11px 0 0"
            />
            Excluir
          </CustomButton>
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
  loading: PropTypes.bool,
};

ProductCard.defaultProps = {
  loading: true,
};

export default ProductCard;
