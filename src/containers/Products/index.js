import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-awesome-styled-grid';
import Layout from '../../components/Layout';
import Loading from './Loading';
import ProductCard from '../../components/ProductCard';
import ProductForm from './ProductForm';
import { ActionCreators as RestaurantActions } from '../../store/ducks/restaurant';
import { ActionCreators as RestaurantPlateActions } from '../../store/ducks/plates';
import { getRestaurantId } from '../../services/authentication';
import { CustomCol, NewProductButton } from './styles';

const Products = () => {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const { loading, data } = useSelector(({ restaurant }) => restaurant);
  const { plates } = data || {};

  useEffect(() => {
    dispatch(RestaurantActions.addRestaurantRequest());
  }, []);

  return (
    <Layout sidebar>
      {!openForm && (
        <Container fluid={false}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
          >
            <NewProductButton onClick={() => setOpenForm(!openForm)}>
              Novo produto
            </NewProductButton>
          </div>
          <Row>
            {loading && <Loading loading={loading} />}
            {plates && plates.map((plate) => (
              <CustomCol xs={4} sm={8} md={6} lg={4} xl={4}>
                <ProductCard
                  key={plate._id}
                  plate={plate}
                  onDelete={() => dispatch(
                    RestaurantPlateActions.removeRestaurantPlateRequest({
                      restaurantId: getRestaurantId(),
                      plateId: plate._id,
                    }),
                  )}
                />
              </CustomCol>
            ))}
          </Row>
        </Container>
      )}
      {openForm && <ProductForm onCancel={() => setOpenForm(!openForm)} />}
    </Layout>
  );
};

export default Products;
