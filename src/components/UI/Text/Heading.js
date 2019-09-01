import React from 'react';
import PropTypes from 'prop-types'

const Heading = props => {
   return (
     <div className="text-center mt-4">
       <span className="text-5xl mr-4 text-teal-400">{props.text}</span>
     </div>
   )
}

Heading.propTypes = {
  text: PropTypes.string,
}

export default Heading;