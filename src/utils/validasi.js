import validatejs from 'validation.js';

import validationRule from './rules';

// Mengambil Value Inputan
function onInputChange({id, value}) {
  const {inputs} = this.state;
  this.setState({
    inputs: {
      ...inputs,
      [id]: getValidationState({
        input: inputs[id],
        value,
      }),
    },
  });
}

// Mengembalikan state terbaru yang sudah di validasi
function getValidationState({input, value}) {
  return {
    ...input,
    value,
    error: input.optional ? null : validate({type: input.type, value}),
  };
}

// Cek validasi inputan
function validate({type, value}) {
  const result = validatejs(
    {
      [type]: value,
    },
    {
      [type]: validationRule[type],
    },
  );

  if (result) {
    return result[type][0];
  }

  return null;
}

// Cek seluruh inputan yang dites
function isValidate() {
  console.log(this.state);
  const {inputs} = this.state;

  const updatedInputs = {};

  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries */
  for (const [key, input] of Object.entries(inputs)) {
    updatedInputs[key] = getValidationState({
      input,
      value: input.value,
    });
  }

  this.setState({
    inputs: updatedInputs,
  });
}

export const validationHelper = {
  onInputChange,
  getValidationState,
  validate,
  isValidate,
};
