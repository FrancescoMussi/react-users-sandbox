import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {

  return (
    <div className="mb-4">
      <label className="md:w-2/3 block text-gray-500 font-bold">
        <input
          className="mr-2 leading-tight"
          type={props.type}
          checked={props.value}
          onChange={props.onChange}
        />
        <span className="text-sm">{props.label}</span>
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  errorMessage: PropTypes.string,
  isTouched: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  reset: PropTypes.func,
}

export default Checkbox
