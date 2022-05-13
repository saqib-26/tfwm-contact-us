/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Input = ({
  label = '',
  label2 = '',
  name = '',
  defaultValue = '',
  errorMsg = '',
  required,
  register,
  errors,
}) => {
  const [hasError, setHasError] = useState(errors.includes(name));

  const inputChageHandler = (event) => {
    if (event.target.value === '') {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };
  useEffect(() => {
    if (errors.includes(name)) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [errors]);

  return (
    <div className={`wmnds-fe-group ${hasError && required && 'wmnds-fe-group--error'}`}>
      {label && (
        <label style={{ marginBottom: label2 && 0 }} className="wmnds-fe-label" htmlFor="input">
          {label}
        </label>
      )}
      {label2 && (
        <label className="wmnds-fe-label" htmlFor="input">
          {label2}
        </label>
      )}
      {hasError && required && <span className="wmnds-fe-error-message">{errorMsg}</span>}
      <input
        className={`wmnds-fe-input ${hasError && required && 'wmnds-fe-input--error'}`}
        id={required ? 'required' : ''}
        name={name}
        type="text"
        style={{ width: '20rem' }}
        defaultValue={defaultValue}
        onChange={inputChageHandler}
        ref={register}
      />
    </div>
  );
};

// PropTypes
Input.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default Input;
