import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { useFormInput } from '../../customHooks/formInput'
import * as actionTypes from '../../store/actionsTypes'
import * as formFields from '../../data/dataConfigSetup'

import Alert from '../../components/UI/Alert/Alert'
import Button from '../../components/Buttons/Button'
import Checkbox from '../../components/UI/Form/Checkbox'
import Heading from '../../components/UI/Text/Heading'
import Input from '../../components/UI/Form/Input'
import Select from '../../components/UI/Form/Select'
import Textarea from '../../components/UI/Form/Textarea'

const FormAdd = props => {
  const inputName = useFormInput(formFields.inputNameConfig)
  const inputSurname = useFormInput(formFields.inputSurnameConfig)
  const inputEmail = useFormInput(formFields.inputEmailConfig)
  const textareaBio = useFormInput(formFields.textareaBioConfig)
  const selectGender = useFormInput(
    formFields.selectGenderConfig,
    formFields.selectGenderConfig.options[0]
  )
  const checkboxNewsletter = useFormInput(formFields.checkboxNewsletterConfig, true)

  const [isFormValid, setFormValid] = useState(false)
  const [showAlertSuccess, setShowAlertSuccess] = useState(false)

  // Run each time an input (with validation on) changes, to check if the form is valid
  useEffect(() => {
    let formValidity =
      inputName.isValid && inputSurname.isValid && inputEmail.isValid
    setFormValid(formValidity)
  }, [inputName.isValid, inputSurname.isValid, inputEmail.isValid])

  // Show alert for 7 seconds if form submit success
  useEffect(() => {
    console.log('useEffect')
    let timer = setTimeout(() => {
      setShowAlertSuccess(false)
    }, 7000)
    return () => {
      // clear timeout as cleanup (if component unmount)
      clearTimeout(timer)
    }
  }, [showAlertSuccess])

  const resetForm = (event = null) => {
    // If button Reset has been clicked, prevent possible onBlur event coming from a blurring out from a field
    if (event) {
      event.preventDefault()
    }

    inputName.reset()
    inputSurname.reset()
    inputEmail.reset()
    textareaBio.reset()
    selectGender.reset()
    checkboxNewsletter.reset()
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    setShowAlertSuccess(false)
    if (isFormValid) {
      const user = {
        id: props.userList.length + 1,
        name: inputName.value,
        surname: inputSurname.value,
        email: inputEmail.value,
        bio: textareaBio.value,
        gender: selectGender.value,
        newsletter: checkboxNewsletter.value,
      }
      props.userAddToStore(user)
      resetForm()
      setShowAlertSuccess(true)
    }
  }

  return (
    <div>
      <Heading text="Add User" />
      {showAlertSuccess ? (
        <Alert
          title="User successfully added!"
          body="You can add more users if you want."
          theme="success"
        />
      ) : null}
      <form
        onSubmit={handleFormSubmit}
        className="bg-white shadow-md rounded lg:px-48 sm:px-16 pt-6 pb-8 mb-4"
      >
        <Input {...inputName} />
        <Input {...inputSurname} />
        <Input {...inputEmail} />
        <Textarea {...textareaBio} />
        <Select {...selectGender} />
        <Checkbox {...checkboxNewsletter} />
        <Button
          type="submit"
          theme="info"
          text="Submit"
          isDisabled={!isFormValid}
          extraClasses={['mr-3']}
        />
        <Button type="button" theme="danger" text="Reset" onClick={resetForm} />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userList: state.userList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userAddToStore: user =>
      dispatch({ type: actionTypes.USER_ADD, payload: user }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormAdd)
