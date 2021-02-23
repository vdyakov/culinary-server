import jwt from 'jsonwebtoken';
import config from 'config';
import IUser from '../../intefaces/models/IUser';
import IJwtRequest from '../../intefaces/routes/IJwtRequest';

const TOKEN_SECRET = config.get('TOKEN_SECRET');

const getTokenFromHeader = (req: IJwtRequest) => {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		return req.headers.authorization.split(' ')[1];
	}

	return null;
};

const getTokenForUser = (user: IUser) => jwt.sign({
		email: user.email,
		_id: user._id,
	}, TOKEN_SECRET);

export { getTokenFromHeader, getTokenForUser };