import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as actionTypes from '../../store/actionsTypes'
import { useFormInput } from '../../customHooks/formInput'
import {
  inputNameConfig,
  inputSurnameConfig,
  inputEmailConfig,
  textareaBioConfig,
  selectGenderConfig,
  checkboxNewsletterConfig,
} from '../../data/dataConfigSetup'

import Button from '../../components/Buttons/Button'
import Checkbox from '../../components/UI/Form/Checkbox'
import Heading from '../../components/UI/Text/Heading'
import Input from '../../components/UI/Form/Input'
import Select from '../../components/UI/Form/Select'
import Textarea from '../../components/UI/Form/Textarea'

const UserEdit = props => {

  const [isFormValid, setFormValid] = useState(true)
  const inputName = useFormInput(
    inputNameConfig,
    props.location.user.name,
    true
  )
  const inputSurname = useFormInput(
    inputSurnameConfig,
    props.location.user.surname,
    true
  )
  const inputEmail = useFormInput(
    inputEmailConfig,
    props.location.user.email,
    true
  )
  const textareaBio = useFormInput(textareaBioConfig, props.location.user.bio)
  const selectGender = useFormInput(
    selectGenderConfig,
    props.location.user.gender
  )
  const checkboxNewsletter = useFormInput(
    checkboxNewsletterConfig,
    props.location.user.newsletter
  )

  // Run each time an input (with validation on) changes, to check if the form is valid
  useEffect(() => {
    const formValidity =
      inputName.isValid && inputSurname.isValid && inputEmail.isValid
    setFormValid(formValidity)
  }, [inputName, inputSurname, inputEmail])

  const handleFormSubmit = event => {
    event.preventDefault()
    if (isFormValid) {
      const user = {
        id: props.location.user.id,
        name: inputName.value,
        surname: inputSurname.value,
        email: inputEmail.value,
        bio: textareaBio.value,
        gender: selectGender.value,
        newsletter: checkboxNewsletter.value,
      }
      props.userEdit(user)
      props.history.push('/')
    }
  }

  const handleResetForm = (event = null) => {
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

  return (
    <div>
      <Heading text="Edit User" />
      <form
        onSubmit={handleFormSubmit}
        className="bg-white shadow-md rounded px-64 pt-6 pb-8 mb-4"
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
        <Button
          type="button"
          theme="danger"
          text="Reset"
          onClick={handleResetForm}
        />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    userEdit: user => dispatch({ type: actionTypes.USER_EDIT, payload: user }),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(UserEdit)
