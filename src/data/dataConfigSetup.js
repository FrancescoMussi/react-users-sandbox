// Form input fields config
// They are in a separate file to keep the component

export const inputNameConfig = {
  type: 'text',
  name: 'name',
  label: 'Name',
  placeholder: 'Name',
  validation: {
    validate: true,
    errorMessages: {
      required: 'Please insert the name',
    },
    rules: {
      required: true,
    },
  },
}

export const inputSurnameConfig = {
  type: 'text',
  name: 'surname',
  label: 'Surname',
  placeholder: 'Surname',
  validation: {
    validate: true,
    errorMessages: {
      required: 'Please insert the surname',
    },
    rules: {
      required: true,
    },
  },
}

export const inputEmailConfig = {
  type: 'email',
  name: 'email',
  label: 'Email',
  placeholder: 'Email',
  validation: {
    validate: true,
    errorMessages: {
      required: 'Please insert the email',
      email: 'Please insert a valid email',
    },
    rules: {
      required: true,
      email: true,
    },
  },
}

export const textareaBioConfig = {
  type: 'textarea',
  name: 'bio',
  label: 'Bio (optional)',
  placeholder: 'Bio',
  rows: 5,
  validation: {
    validate: false,
    errorMessage: 'Please insert the bio',
    rules: {
      required: false,
    },
  },
}

export const selectGenderConfig = {
  type: 'select',
  name: 'gender',
  label: 'Gender',
  placeholder: 'Gender',
  options: ['male', 'female'],
  validation: {
    validate: false,
  },
}

export const checkboxNewsletterConfig = {
  type: 'checkbox',
  name: 'newsletter',
  label: 'Subscribe me to the newsletter!',
  validation: {
    validate: false,
  },
}
