import * as dotenv from 'dotenv';

dotenv.config();

export default class Constants {
  static env = process.env.NODE_ENV;

  static port = process.env.PORT;

  static database = {
    host: process.env.DATABASE_HOST,
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  };

  static token = {
    secret: process.env.SECRET,
    expirationToken: process.env.EXPIRATION_TOKEN,
    expirationRefreshToken: process.env.EXPIRATION_REFRESH_TOKEN,
  }

  static timezone = process.env.TIMEZONE;

  static language = process.env.LANGUAGE;

  static fileSizeLimit = 5242880; // 5MB
}
