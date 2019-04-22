import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  autocomplete, classNames, id, inputName, onChangeHandler, onKeyDownHandler, placeholder, defaultValue,
}) => (
  <input
    autoComplete={autocomplete}
    className={classNames !== '' ? `text-input ${classNames}` : 'text-input'}
    id={id}
    name={inputName}
    onBlur={(e) => { e.stopPropagation(); }}
    onKeyDown={onKeyDownHandler}
    onChange={onChangeHandler}
    placeholder={placeholder !== '' ? placeholder : null}
    type="text"
    value={defaultValue}
    />
);

TextInput.defaultProps = {
  autocomplete: 'off',
  classNames: '',
  placeholder: '',
};

TextInput.propTypes = {
  autocomplete: PropTypes.string,
  classNames: PropTypes.string,
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func,
  onKeyDownHandler: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
};

export default TextInput;
