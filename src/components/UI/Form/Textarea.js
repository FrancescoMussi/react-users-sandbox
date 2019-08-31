import React from 'react'
import PropTypes from 'prop-types'

const TextArea = props => {

  let errorMessage = null
  let inputClasses = [
    'shadow',
    'appearance-none',
    'border',
    'rounded',
    'w-full',
    'py-2',
    'px-3',
    'text-gray-700',
    'leading-tight',
  ]

  if (props.validation.validate) {
    if (props.isTouched && !props.isValid) {
      inputClasses.push('border-red-500', 'outline-none')
      errorMessage = (
        <p className="text-red-500 text-xs italic mt-1">
          {props.validation.errorMessage}
        </p>
      )
    }
  }

  return (
    <div className="mb-4">
      <label
        className="custom-capitalize block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <textarea
        id={props.name}
        name={props.name}
        rows={props.rows}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.validate}
        onFocus={props.onFocus}
        className={inputClasses.join(' ')}
      ></textarea>
      {errorMessage}
    </div>
  )
}

TextArea.propTypes = {
  errorMessage: PropTypes.string,
  isTouched: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  reset: PropTypes.func,
}

export default TextArea
