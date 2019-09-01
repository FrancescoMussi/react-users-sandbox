import React from 'react'
import PropTypes from 'prop-types'

const Alert = props => {

  let alertDefaultClasses = [
    'm-8',
    'mb-0',
    'border-t-4',
    'rounded-b',
    'py-3',
    'px-4',
    'sm:mx-16',
    'lg:mx-48',
    'shadow-md',
  ]
  let svgDefaultClasses = ['fill-current', 'h-6', 'w-6', 'mr-4']

  let alertThemedClasses = []
  let svgThemedClasses = []

  switch (props.theme) {
    case 'success':
      alertThemedClasses = ['border-teal-500', 'text-teal-900', 'bg-teal-100']
      svgThemedClasses = ['text-teal-500']
      break

    default:
      break
  }

  const alertClasses = [...alertDefaultClasses, ...alertThemedClasses]
  const svgClasses = [...svgDefaultClasses, ...svgThemedClasses]

  return (
    <div className={alertClasses.join(' ')} role="alert">
      <div className="flex">
        <div className="py-1">
          <svg
            className={svgClasses.join(' ')}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">{props.title}</p>
          <p className="text-sm">{props.body}</p>
        </div>
      </div>
    </div>
  )
}

Alert.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  theme: PropTypes.string,
}


export default Alert
