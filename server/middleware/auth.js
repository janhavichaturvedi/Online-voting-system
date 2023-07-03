const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: 'server/.env' });

module.exports = (req, res, next) => {
  if (req.headers['authorization']) {
    const token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) {
        // res.json({
        //   success: false,
        //   message: 'Failed to authenticate token',
        // });
        next(Error('Failed to authenticate token'));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // res.status(403).json({
    //   status: false,
    //   message: 'No token provided',
    // });

    next(Error('No token provided'));
  }
};
