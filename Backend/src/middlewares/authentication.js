const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não existe.' });
  }

  try {
    const decoded = jwt.verify(token, 'seuSegredo');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token de autenticação inválido.' });
  }
};

module.exports = authenticate;
