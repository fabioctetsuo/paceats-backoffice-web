import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const SearchInput = styled.input`
  height: 32px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
  padding: 0 8px;
  outline: none;
  margin: 0 8px 0 0;

  &:focus {
    border: 2px solid #a3dfc2;
  }
`;

export const SearchButton = styled.button`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  background: none;
  transition: background .2s;

  &:hover {
    background: #a3dfc2
  }

  &:active {
    background: #a3dfc2
  }
`;
