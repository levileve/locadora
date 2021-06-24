import JwtService from '../../services/jwt';
import UserService from '../../services/user';
import UnauthorizedError from '../../utilities/errors/unauthorized';

export default async function authToken(req, res, next) {
  try {
    const [, token] = req.headers.authorization.split(' ');
    const auth = JwtService.verifyToken(token);
    const user = await UserService.getSimpleWithPassword(auth.id);

    req.user = user;
  } catch (error) {
    throw new UnauthorizedError();
  }

  return next();
}
