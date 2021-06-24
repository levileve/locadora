import httpStatus from 'http-status';

export default function authorize(profileList) {
  return (req, res, next) => {
    const hasAccess = req.user && profileList.find(o => o === req.user.profileType);

    return hasAccess ? next() : res.sendStatus(httpStatus.FORBIDDEN);
  };
}
