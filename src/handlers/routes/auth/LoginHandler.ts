import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import IUser from '../../../intefaces/models/IUser';
import IAuthRequest from '../../../intefaces/routes/IAuthRequest';
import { loginValidation } from '../../../helpers/validators/AuthValidator';
import { getTokenForUser } from '../../../helpers/utils/JwtUtil';

async function loginHandler(req: IAuthRequest, res) {
	const { error } = loginValidation(req.body || {});

	if (error) {
		return res.status(400).json({ error: error.details[0]?.message });
	}

	const { email = '', password = '' } = req.body;

	const user: IUser = await User.findOne({ email });

	if (!user) {
		return res.status(400).json({ error: 'Email is wrong' });
	}

	const validPassword = await bcrypt.compare(password, user.password_hash);

	if (!validPassword) {
		return res.status(400).json({ error: 'Password or email is incorrect' });
	}

	const token = getTokenForUser(user);

	res.header('Authorization', `Bearer ${token}`).json({
		error: null,
		data: {
			token,
		},
	});
}

export { loginHandler };