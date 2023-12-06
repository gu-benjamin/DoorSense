import { z } from 'zod';

const senhaSchema = z.string().refine((value) => {
  // Pelo menos 5 caracteres
  const lengthValid = value.length >= 5;

  // Pelo menos 1 número
  const containsNumber = /\d/.test(value);

  // Pelo menos 1 letra maiúscula
  const containsUpperCase = /[A-Z]/.test(value);

  // Pelo menos 1 letra minúscula
  const containsLowerCase = /[a-z]/.test(value);

  // Pelo menos 1 caractere especial
  const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  return lengthValid && containsNumber && containsUpperCase && containsLowerCase && containsSpecialChar;
}, {
  message: 'Deve conter pelo menos 5 caracteres, 1 número, 1 letra maiúscula e minúscula e 1 caractere especial.',
});

export {senhaSchema}