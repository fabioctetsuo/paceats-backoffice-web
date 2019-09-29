import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 230px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(33,54,79,0.32);
  overflow: hidden;
`;

export const Header = styled.header`
  position: relative;
  height: 120px;
`;

export const Content = styled.div`
  padding: 16px;
  height: auto;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 16px;
`;

export const Title = styled.h6`
  color: #001027;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0.25px;
  line-height: 27px;
  margin: 0;
  flex: 2;
`;

export const Description = styled.address`
  color: #41414A;
  font-size: 16px;
  font-style: normal;
  letter-spacing: 0.5px;
  line-height: 28px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: center;
`;
