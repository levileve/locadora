import ProfileType from '../../enumerators/profile-type';
import errorHandler from './error-handler';
import ForbiddenError from '../../utilities/errors/forbidden';

export default function canManageUser() {
  return async (req, res, next) => {
    try {

      switch (req.user.profileType) {

        case ProfileType.CLIENT:
          if (req.params.id !== req.user.id || req.body.profileType) {
            throw new ForbiddenError();
          }

          break;

        default:
          break;

      }

      return next();
    } catch (err) {
      return errorHandler(err, req, res);
    }
  };
}
