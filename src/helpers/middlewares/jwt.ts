import jwt from 'jsonwebtoken';
import config from 'config';
import { Response } from 'Express';
import IJwtRequest from '../../intefaces/routes/IJwtRequest';
import { getTokenFromHeader } from '../utils/JwtUtil';

const TOKEN_SECRET: string = config.get('TOKEN_SECRET');

const verifyToken = (req: IJwtRequest, res: Response, next: () => {}) => {
	const token = getTokenFromHeader(req);

	if (!token) return res.status(401).json({ error: 'Access denied' });

	try {
		req.user = jwt.verify(token, TOKEN_SECRET);
		next();
	} catch (err) {
		res.status(400).json({ error: 'Token is not valid' });
	}
};

export { verifyToken };