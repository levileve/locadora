import jwt from 'jsonwebtoken';
import Constants from '../utilities/constants';


export default class JwtService {
  static createTokenAndRefresh(createToken) {
    let response = { token: '', refreshToken: '' };
    const expiresTokenIn = parseFloat(Constants.token.expirationToken) * 3600;
    const expiresRefreshTokenIn = parseFloat(Constants.token.expirationRefreshToken) * 3600;
    const token = jwt.sign({ id: createToken }, `${Constants.token.secret}`, { expiresIn: expiresTokenIn });
    const refreshToken = jwt.sign({ id: createToken }, `${Constants.token.secret}`, { expiresIn: expiresRefreshTokenIn });

    response = { token, refreshToken };

    return response;
  }

  static verifyToken(verifyToken) {
    const expiresIn = parseFloat(Constants.token.expirationToken) * 3600;
    return jwt.verify(verifyToken, `${Constants.token.secret}`, { expiresIn });
  }

  static verifyRefreshToken(refreshToken) {
    const expiresIn = parseFloat(Constants.token.expirationRefreshToken) * 3600;
    return jwt.verify(refreshToken, `${Constants.token.secret}`, { expiresIn });
  }
}
