import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
import { Container as Grid, Col } from 'react-awesome-styled-grid';
import {
  Container,
  CustomInput,
  CustomRow,
  CustomSelect,
} from './styles';
import PrimaryButton from '../../../components/Button/Primary';
import SecondaryButton from '../../../components/Button/Secondary';
import { ActionCreators as RestaurantPlateActions } from '../../../store/ducks/plates';
import { getRestaurantId } from '../../../services/authentication';

const UPDATE_ACTION = 'updateRestaurantPlatesRequest';
const ADD_ACTION = 'addRestaurantPlatesRequest';

const getAction = (hasData) => (hasData ? UPDATE_ACTION : ADD_ACTION);

const getParsedPayload = (payload) => ({
  ...payload,
  originalPrice: parseFloat(payload.originalPrice),
  price: parseFloat(payload.price),
  quantity: parseInt(payload.quantity, 10),
  timeToPay: parseInt(payload.timeToPay, 10),
});

const hours = [
  { id: 1, title: '1 hora' },
  { id: 2, title: '2 horas' },
  { id: 3, title: '3 horas' },
  { id: 4, title: '4 horas' },
];

const ProductForm = ({ onCancel, productData }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ plates }) => plates);
  return (
    <Container>
      <Grid fluid={false}>
        <Form
          initialData={productData}
          onSubmit={(data) => {
            const action = getAction(productData);
            if (action === UPDATE_ACTION) {
              dispatch(RestaurantPlateActions[action]({
                restaurantId: getRestaurantId(),
                plate: getParsedPayload(data),
              }));
            } else {
              dispatch(RestaurantPlateActions[action]({
                restaurantId: getRestaurantId(),
                plates: [getParsedPayload(data)],
              }));
            }
            onCancel();
          }}
        >
          <CustomInput
            name="_id"
            disabled
            type="hidden"
          />
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
            <Col xs={12} sm={4} md={6} lg={8} xl={8}>
              <CustomInput
                required
                name="description"
                label="Descrição"
                disabled={loading}
                placeholder="Digite uma descrição para ele"
              />
            </Col>
          </CustomRow>
          <CustomRow>
            <Col xs={4} sm={8} md={8} lg={8} xl={8}>
              <CustomInput
                required
                name="image"
                label="Imagem"
                disabled={loading}
                placeholder="https://www.bk.com/sites/default/files/02982-1%20BK_Web_WHOPPER_500x540_CR.png"
              />
            </Col>
            <Col xs={12} sm={4} md={6} lg={2} xl={2}>
              <CustomInput
                required
                name="originalPrice"
                label="Preço original"
                disabled={loading}
                placeholder="Digite o valor do preço original"
              />
            </Col>
            <Col xs={12} sm={4} md={6} lg={2} xl={2}>
              <CustomInput
                required
                name="price"
                label="Preço promocional"
                disabled={loading}
                placeholder="Digite o valor do preço promocional"
              />
            </Col>
          </CustomRow>
          <CustomRow>
            <Col xs={4} sm={8} md={2} lg={2} xl={2}>
              <CustomInput
                required
                name="quantity"
                label="Quantidade"
                disabled={loading}
                placeholder="10"
              />
            </Col>
            <Col xs={4} sm={8} md={2} lg={2} xl={2}>
              <CustomSelect
                required
                name="timeToPay"
                label="Validade"
                options={hours}
                disabled={loading}
                placeholder="Validade"
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
  productData: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    image: PropTypes.string,
  }),
};

ProductForm.defaultProps = {
  productData: null,
};

export default ProductForm;
