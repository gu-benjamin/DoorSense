import { verify } from 'jsonwebtoken';
import { SECRET } from 'utils/envs';

const readToken = (token: string | undefined) => {
  return verify(token, SECRET);

};

export function verifyToken(token: string | undefined) {
  return readToken(token);
}
