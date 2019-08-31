import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
  let errorMessage = null

  let defaultClasses = [
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
  let errorClasses = ['border-red-500', 'outline-none']
  let classes = []

  if (props.isTouched && !props.isValid) {
    classes = [...defaultClasses, ...errorClasses]
    errorMessage = (
      <p className="text-red-500 text-xs italic mt-1">{props.errorMessage}</p>
    )
  } else if (!props.isTouched || props.isValid) {
    classes = [...defaultClasses]
  }

  return (
    <div className="mb-4">
      <label
        className="custom-capitalize block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={classes.join(' ')}
      />
      {errorMessage}
    </div>
  )
}

Input.propTypes = {
  errorMessage: PropTypes.string,
  isTouched: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  reset: PropTypes.func,
}

export default Input
