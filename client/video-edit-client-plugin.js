function register ({ registerVideoField }) {
  buildFormInputs(registerVideoField)
}

export {
  register
}

function buildFormInputs (registerVideoField) {
  for (const type of [ 'upload', 'update' ]) {
    const options = { type, tab: 'main' }

    registerVideoField({
      name: 'senderResponsible',
      label: 'Sendeverantwortung',
      type: 'input'
    }, options)

    registerVideoField({
      name: 'authorName',
      label: 'Имя автора',
      type: 'input'
    }, options)
  }
}
