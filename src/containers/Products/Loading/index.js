import React from 'react';
import ContentLoader from 'react-content-loader';
import { CustomCol } from '../styles';
import ProductCard from '../../../components/ProductCard';
// import { Container } from './styles';

const TitleLoader = () => (
  <ContentLoader
    height={200}
    width={300}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#e1e0e2"
  >
    <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />
  </ContentLoader>
);

const Loading = () => (
  <>
    <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
      <TitleLoader />
    </CustomCol>
    <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
      <TitleLoader />
    </CustomCol>
    <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
      <TitleLoader />
    </CustomCol>
    <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
      <TitleLoader />
    </CustomCol>
    <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
      <TitleLoader />
    </CustomCol>
    <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
      <TitleLoader />
    </CustomCol>
    <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
      <TitleLoader />
    </CustomCol>
    <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
      <TitleLoader />
    </CustomCol>
    <CustomCol xs={12} sm={4} md={6} lg={4} xl={4}>
      <TitleLoader />
    </CustomCol>
  </>
);

export default Loading;
