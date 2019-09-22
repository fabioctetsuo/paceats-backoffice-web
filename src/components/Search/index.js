import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import {
  Container,
  SearchForm,
  SearchInput,
  SearchButton,
} from './styles';

const Search = ({ handleCustomerSearch, handleSubmit, value }) => (
  <Container>
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        onChange={(event) => handleCustomerSearch(event)}
        value={value}
        placeholder="Digite o nome"
      />
      <SearchButton>
        <SvgIcon
          icon="SEARCH_ICON"
          width={16}
          height={16}
          viewBox="0 0 16 16"
        />
      </SearchButton>
    </SearchForm>
  </Container>
);

Search.propTypes = {
  handleCustomerSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
