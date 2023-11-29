import { verify } from 'jsonwebtoken';

const readToken = (token: string) => {
  try {
    return verify(token, 'arduino');
  } catch (error) {
    throw new Error('Token inválido.');
  }
};

export function verifyToken(token: string) {
  return readToken(token);
}
