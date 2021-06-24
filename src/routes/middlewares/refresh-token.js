import JwtService from '../../services/jwt';
import UserService from '../../services/user';
import UnauthorizedError from '../../utilities/errors/unauthorized';

export default async function authRefreshToken(req, res, next) {
  try {
    const [, refreshToken] = req.headers.authorization.split(' ');
    const auth = JwtService.verifyRefreshToken(refreshToken);
    const user = await UserService.getById(auth.id);

    req.user = user;
  } catch (error) {
    throw new UnauthorizedError();
  }

  return next();
}
