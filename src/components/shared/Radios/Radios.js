import React from 'react';
import PropTypes from 'prop-types';
import dompurify from 'dompurify';
// Import contexts
// eslint-disable-next-line import/no-unresolved
import { useForm } from 'react-hook-form';
// Import components
import Radio from './Radio/Radio';

const { sanitize } = dompurify;

// eslint-disable-next-line react/prop-types
const Radios = ({ name, label, classes, radios, onChange, fieldValidation }) => {
  const { errors } = useForm();
  console.log('radios >>>', radios);
  return (
    <>
      {fieldValidation ? (
        <div className="wmnds-msg-summary wmnds-msg-summary--error ">
          <div className="wmnds-msg-summary__header">
            <svg className="wmnds-msg-summary__icon">
              <use
                xlinkHref="#wmnds-general-warning-triangle"
                href="#wmnds-general-warning-triangle"
              />
            </svg>
            <h3 className="wmnds-msg-summary__title">There is a Problem</h3>
          </div>
          <span
            className="wmnds-msg-summary__info"
            dangerouslySetInnerHTML={{
              __html: sanitize(fieldValidation.message),
            }}
          />
        </div>
      ) : null}
      <div className={`wmnds-fe-group ${fieldValidation ? 'wmnds-fe-group--error' : ''}`}>
        <fieldset className="wmnds-fe-fieldset">
          <legend className="wmnds-fe-fieldset__legend">
            {/* {label && <h2 className="wmnds-fe-question">{label}</h2>} */}
            {/* If there is an error, show here */}
            {fieldValidation && (
              <span
                className="wmnds-fe-error-message"
                dangerouslySetInnerHTML={{
                  __html: sanitize(fieldValidation.message),
                }}
              />
            )}
            <div className="wmnds-fe-radios">
              {/* Loop through radios and display each radio button */}
              {radios?.map((radio) => (
                <Radio
                  key={radio.text}
                  name={name}
                  text={radio.text}
                  value={radio.value}
                  id={radio.id}
                  onChange={onChange}
                  fieldValidation={fieldValidation}
                  defaultChecked={radio.selected}
                />
              ))}
            </div>
          </legend>
        </fieldset>
      </div>
    </>
  );
};

// PropTypes
Radios.propTypes = {
  fieldValidation: PropTypes.func,
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
  // label: PropTypes.string,
  onChange: PropTypes.func,
  radios: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any, PropTypes.bool)).isRequired,
};

Radios.defaultProps = {
  fieldValidation: null,
  onChange: PropTypes.func,

  classes: null,
  // label: null,
};

export default Radios;