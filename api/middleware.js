
const middleware = {

  requireUser: (req, res, next) => {
    if(!req.user){
      res.status(401);
      next({
          name: 'MissingUserError',
          message: 'You must be logged in to perform this action',
      });
    }else{
      next();
    }
  },

  isAdmin: (req, res, next) => {
    if(!req.user.admin){
      res.status(401);
      next({
          name: 'UserPermissionsError',
          message: "You don't have the required permissions to preform this action",
      });
    }else{
      next();
    }
  }

}

module.exports = middleware;
