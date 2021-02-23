import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import IUser from '../../../intefaces/models/IUser';
import IAuthRequest from '../../../intefaces/routes/IAuthRequest';
import { registerValidation } from '../../../helpers/validators/AuthValidator';
import { getTokenForUser } from '../../../helpers/utils/JwtUtil';

async function registerHandler(req: IAuthRequest, res) {
	const { error } = registerValidation(req.body || {});

	if (error) {
		return res.status(400).json({ error: error.details[0]?.message });
	}

	const { email = '', password = '', username = '' } = req.body;

	const isEmailExist = await User.findOne({ email });

	if (isEmailExist) {
		return res.status(400).json({ error: 'Email already exists' });
	}

	const salt: string = await bcrypt.genSalt(10);
	const passwordHash: string = await bcrypt.hash(password, salt);

	const user: IUser = new User({
		username,
		email,
		password_hash: passwordHash,
	});

	try {
		const savedUser = await user.save();

		const token = getTokenForUser(savedUser);

		res.header('Authorization', `Bearer ${token}`).json({
			error: null,
			data: {
				token,
			},
		});
	} catch (error) {
		res.status(400).json({ error });
	}
}

export { registerHandler };