import Joi from 'Joi';
import { AuthBodyParams } from '../../intefaces/routes/IAuthRequest';

const registerValidation = (data: AuthBodyParams) => {
	const schema = Joi.object({
		username: Joi.string().min(6).max(255).required(),
		email: Joi.string().min(6).max(255).required().email(),
		password: Joi.string().min(6).max(1024).required(),
	});

	return schema.validate(data);
};

const loginValidation = (data: AuthBodyParams) => {
	const schema = Joi.object({
		email: Joi.string().min(6).max(255).required().email(),
		password: Joi.string().min(6).max(1024).required(),
	});

	return schema.validate(data);
};

export { registerValidation, loginValidation };