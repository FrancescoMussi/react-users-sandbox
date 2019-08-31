import { useState } from 'react'

export const useFormInput = (inputConfig, valueInit = '', isValidInit = null) => {

  const [config] = useState(inputConfig)
  const [value, setValue] = useState(valueInit)
  const [isTouched, setTouched] = useState(false)
  const [isValid, setValidity] = useState(isValidInit ? isValidInit : !inputConfig.validation.validate)
  const [errorMessage, setErrorMessage] = useState('')

  let rulesBroken = {
    required: false,
    email: false,
  }

  const handleOnBlur = event => {
    setTouched(true)
    if (config.validation.validate) {
      validate(event)
    }
  }

  const handleReset = () => {
    if (valueInit) {
      setValue(valueInit)
    } else {
      if (config.type === 'select') {
        setValue(config.options[0])
      } else {
        setValue('')
      }
    }
    setTouched(false)
  }

  const validate = event => {
    // console.log(config.validation.rules)

    if (config.validation.rules.email) {
      let regex = /\S+@\S+\.\S+/

      if (!regex.test(event.target.value)) {
        rulesBroken = { ...rulesBroken, email: true }
      } else {
        rulesBroken = { ...rulesBroken, email: false }
      }
    }

    if (config.validation.rules.required) {
      if (event.target.value.trim() === '') {
        rulesBroken = { ...rulesBroken, required: true }
      } else {
        rulesBroken = { ...rulesBroken, required: false }
      }
    }

    const isInvalid = Object.values(rulesBroken).some(item => item)

    if (isInvalid) {
      if (rulesBroken.required) {
        setErrorMessage(config.validation.errorMessages.required)
      } else if (rulesBroken.email) {
        setErrorMessage(config.validation.errorMessages.email)
      }
    } else {
      setErrorMessage('')
    }
    setValidity(!isInvalid)
  }

  const handleInputChange = event => {
    setTouched(true)
    if (config.type === 'checkbox') {
      setValue(event.target.checked)
    } else {
      setValue(event.target.value)
    }
    if (config.validation.validate) {
      validate(event)
    }
  }

  return {
    value,
    isValid,
    isTouched,
    errorMessage,
    ...config,
    onChange: handleInputChange,
    onBlur: handleOnBlur,
    reset: handleReset,
  }
}
