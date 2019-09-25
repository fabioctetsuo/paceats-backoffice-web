import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
import { Container as Grid, Col } from 'react-awesome-styled-grid';
import {
  Container,
  CustomInput,
  CustomRow,
} from './styles';
import PrimaryButton from '../../../components/Button/Primary';
import SecondaryButton from '../../../components/Button/Secondary';
import { ActionCreators as RestaurantPlateActions } from '../../../store/ducks/plates';
import { getRestaurantId } from '../../../services/authentication';

const ProductForm = ({ onCancel }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ plates }) => plates);
  return (
    <Container>
      <Grid fluid={false}>
        <Form
          onSubmit={(data) => {
            dispatch(RestaurantPlateActions.addRestaurantPlatesRequest({
              restaurantId: getRestaurantId(),
              plates: [{
                ...data,
                price: parseFloat(data.price),
                quantity: parseInt(data.quantity, 10),
              }],
            }));
            onCancel();
          }}
        >
          <CustomRow>
            <Col xs={12} sm={4} md={6} lg={4} xl={4}>
              <CustomInput
                required
                name="name"
                label="Nome"
                disabled={loading}
                placeholder="Digite o nome do produto"
              />
            </Col>
            <Col xs={12} sm={4} md={6} lg={6} xl={6}>
              <CustomInput
                required
                name="description"
                label="Descrição"
                disabled={loading}
                placeholder="Digite uma descrição para ele"
              />
            </Col>
            <Col xs={12} sm={4} md={6} lg={2} xl={2}>
              <CustomInput
                required
                name="price"
                label="Preço"
                disabled={loading}
                placeholder="Digite o valor"
              />
            </Col>
          </CustomRow>
          <CustomRow>
            <Col xs={4} sm={8} md={10} lg={10} xl={10}>
              <CustomInput
                required
                name="image"
                label="Imagem"
                disabled={loading}
                placeholder="https://www.bk.com/sites/default/files/02982-1%20BK_Web_WHOPPER_500x540_CR.png"
              />
            </Col>
            <Col xs={4} sm={8} md={2} lg={2} xl={2}>
              <CustomInput
                required
                name="quantity"
                label="Quantidade"
                disabled={loading}
                placeholder="10"
              />
            </Col>
          </CustomRow>
          <PrimaryButton
            type="submit"
            margin="8px 0 0 0"
            width="100%"
            disabled={loading}
          >
            {loading ? 'Carrengando' : 'Salvar'}
          </PrimaryButton>
          <SecondaryButton
            type="submit"
            width="100%"
            margin="8px 0 0 0"
            onClick={onCancel}
            disabled={loading}
          >
            Cancelar
          </SecondaryButton>
        </Form>
      </Grid>
    </Container>
  );
};

ProductForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default ProductForm;
