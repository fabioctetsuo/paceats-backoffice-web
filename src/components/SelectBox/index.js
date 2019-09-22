import React from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

const SelectBox = ({
  options,
  isMulti,
  placeholder,
  hideSelectedOptions,
  components,
  closeOnSelect,
  onChange,
  isSearchable,
  styles,
  defaultValue,
  isClearable,
  classNamePrefix,
  value,
  isOptionDisabled,
}) => (
  <ReactSelect
    options={options}
    isMulti={isMulti}
    placeholder={placeholder}
    hideSelectedOptions={hideSelectedOptions}
    components={components}
    closeMenuOnSelect={closeOnSelect}
    onChange={onChange}
    isSearchable={isSearchable}
    styles={styles}
    defaultValue={defaultValue}
    isClearable={isClearable}
    classNamePrefix={classNamePrefix}
    value={value}
    isOptionDisabled={isOptionDisabled}
  />
);

SelectBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMulti: PropTypes.bool,
  placeholder: PropTypes.string,
  hideSelectedOptions: PropTypes.bool,
  components: PropTypes.shape(),
  closeOnSelect: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  isSearchable: PropTypes.bool,
  isClearable: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  styles: PropTypes.shape(),
  classNamePrefix: PropTypes.string,
  value: PropTypes.string,
  isOptionDisabled: PropTypes.func,
};

SelectBox.defaultProps = {
  isMulti: false,
  hideSelectedOptions: true,
  closeOnSelect: true,
  components: undefined,
  placeholder: 'Select an option',
  isSearchable: false,
  isClearable: false,
  defaultValue: undefined,
  styles: undefined,
  classNamePrefix: 'select',
  value: undefined,
  isOptionDisabled: null,
};

export default SelectBox;
