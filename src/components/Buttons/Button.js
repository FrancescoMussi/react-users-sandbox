import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {

  const defaultClasses = ['py-2', 'px-4', 'rounded', 'font-bold']
  const disabledClasses = ['opacity-50', 'cursor-not-allowed']
  let themedClasses = []
  let classes = []

  switch (props.theme) {
    case 'success':
      themedClasses = ['bg-green-500', 'hover:bg-green-700', 'text-white']
      break
    case 'info':
      themedClasses = ['bg-blue-500', 'hover:bg-blue-700', 'text-white']
      break
    case 'danger':
      themedClasses = ['bg-red-500', 'hover:bg-red-700', 'text-white']
      break

    default:
      break
  }

  classes = [...defaultClasses, ...themedClasses]

  if (props.isDisabled) {
    classes = [...classes, ...disabledClasses]
  }

  if (props.extraClasses) {
    classes = [...classes, ...props.extraClasses]
  }

  // console.log({ classes})

  return (
    <button
      type={props.type}
      className={classes.join(' ')}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.icon}
      {props.text}
    </button>
  )
}

Button.propTypes = {
  extraClasses: PropTypes.array,
  icon: PropTypes.element,
  text: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,  
  onClick: PropTypes.func,
  
}

export default Button
