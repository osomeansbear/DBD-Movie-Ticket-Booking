const jwt = require("jsonwebtoken");

function checkAuthToken(req, res, next) {
  const authToken = req.cookies.authToken;
  const refreshToken = req.cookies.refreshToken;

  // check auth token
  // check refresh token
  // auth token is not expired -> user logged in

  // auth token is expired but refresh token is not -> regenerate auth token and refresh token
  // auth token is expired and refresh token is expired -> user not logged in
  if (!authToken || !refreshToken) {
    return res.status(401).json({
      message: "Authentication failed: No authToken or refreshToken provided",
      ok: false,
    });
  }

  jwt.verify(authToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      // auth token is expired
      // check refresh token
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (refreshErr, refreshDecoded) => {
          if (refreshErr) {
            // Both tokens are invalid, send an error message and prompt for login
            return res.status(401).json({
              message: "Authentication failed: Both tokens are invalid",
              ok: false,
            });
          } else {
            const newAuthToken = jwt.sign(
              { userId: refreshDecoded.userId },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "10m" }
            );
            const newRefreshToken = jwt.sign(
              { userId: refreshDecoded.userId },
              process.env.REFRESH_TOKEN_SECRET,
              { expiresIn: "30m" }
            );

            res.cookie("authToken", newAuthToken, { httpOnly: true });
            res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

            req.userId = refreshDecoded.userId;
            req.ok = true;
            next();
          }
        }
      );
      // 1. expired
      // 2. not expired
    } else {
      req.userId = decoded.userId;
      next();
    }
  });
}

module.exports = checkAuthToken;
