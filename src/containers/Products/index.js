import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'react-awesome-styled-grid';
import Layout from '../../components/Layout';
import Loading from './Loading';
import ProductCard from '../../components/ProductCard';
import { ActionCreators as RestaurantActions } from '../../store/ducks/restaurant';
import { CustomCol } from './styles';

const Products = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector(({ restaurant }) => restaurant);
  const { plates } = data || {};

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(RestaurantActions.addRestaurantRequest());
    };
    fetchData();
  }, []);

  return (
    <Layout sidebar>
      <Container fluid={false}>
        <Row>
          {loading && <Loading loading={loading} />}
          {plates && plates.map((plate) => (
            <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
              <ProductCard key={plate._id} plate={plate} />
            </CustomCol>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Products;
