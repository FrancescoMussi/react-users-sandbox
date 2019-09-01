import React from 'react';
import PropTypes from 'prop-types'

const Logo = props => {  
   return (
     <div className="flex items-center flex-shrink-0 text-white mr-6">
       <svg
         className="fill-current h-8 w-8 mr-2"
         width={props.svgWidth}
         height={props.svgHeight}
         viewBox={props.svgViewBox}
         xmlns="http://www.w3.org/2000/svg"
       >
         <path d={props.svgPath} />
       </svg>
       <span className="font-semibold text-xl tracking-tight">
         {props.text}
       </span>
     </div>
   )
}

Logo.propTypes = {
  text: PropTypes.string,
  svgPath: PropTypes.string,
  svgWidth: PropTypes.number,
  svgHeight: PropTypes.number,
  svgViewBox: PropTypes.string,
}

export default Logo;