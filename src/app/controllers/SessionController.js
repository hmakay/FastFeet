import jwt from 'jsonwebtoken';

import auth from '../../config/auth';

import User from '../models/user';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ error: 'Usuário não tem permissão para acessar' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha Incorreta' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

export default new SessionController();
