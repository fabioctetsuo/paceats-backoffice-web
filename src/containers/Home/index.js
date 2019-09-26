import React from 'react';
import { Container as Grid, Col } from 'react-awesome-styled-grid';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import { SubHeadlineText, SubTitle } from '../../components/Typography';
import BakeryImage from '../../assets/images/svg/baker.svg';
import MenuImage from '../../assets/images/svg/menu.svg';
import CardapioImage from '../../assets/images/svg/cardapio.svg';
import {
  Container,
  Welcome,
  CustomSubtitle,
  CustomRow,
  ImageCard,
} from './styles';

const Home = () => (
  <Layout>
    <Container>
      <Grid fluid={false}>
        <CustomRow>
          <Col xs={4} sm={8} md={12} lg={12} xl={12}>
            <Welcome>Seja bem vindo ao novo portal do parceiro!</Welcome>
            <CustomSubtitle fontSize="16px" color="#000">
              Essa é a nova plataforma para que essa parceria seja melhor ainda.
              Nós estamos fazendo melhorias continuamente, para que você tenha
              informações relevantes e ferramentas para fazer com que seu negócio
              alcance outro nível, ajudando a acabar com o desperdício e a fome no mundo!
            </CustomSubtitle>
          </Col>
        </CustomRow>
        <CustomRow>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <ImageCard src={MenuImage} alt="teste" />
              <SubHeadlineText>Menu</SubHeadlineText>
              <SubTitle fontSize="16px" color="#000" margin="8px 0 0 0">
                Encontre tudo que você precisa em apenas um lugar!
              </SubTitle>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <ImageCard src={BakeryImage} alt="teste" />
              <SubHeadlineText>Pedidos</SubHeadlineText>
              <SubTitle fontSize="16px" color="#000" margin="8px 0 0 0">
                Aqui você pode encontrar todos os pedidos do seu restaurante,
                status de cada um e seus respectivos clientes!
              </SubTitle>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <ImageCard src={CardapioImage} alt="teste" />
              <SubHeadlineText>Pratos</SubHeadlineText>
              <SubTitle fontSize="16px" color="#000" margin="8px 0 0 0">
                Quer informar quais pratos você está vendendo?
                Por que não clica em Produtos, é lá que você vai encontrar essa tela!
              </SubTitle>
            </Card>
          </Col>
        </CustomRow>
      </Grid>
    </Container>
  </Layout>
);

export default Home;
