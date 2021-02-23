import Joi from 'Joi';
import { PreferenceTypeBodyParams } from '../../intefaces/routes/IPreferenceTypeRequest';

const createValidation = (data: PreferenceTypeBodyParams) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		not_suitable_for_vegetarians: Joi.boolean().default(false),
	});

	return schema.validate(data);
};

const updateValidation = (data: PreferenceTypeBodyParams) => {
	const schema = Joi.object({
		_id: Joi.string().required(),
		name: Joi.string().required(),
		not_suitable_for_vegetarians: Joi.boolean().default(false),
	});

	return schema.validate(data);
};

const deleteValidation = (data: PreferenceTypeBodyParams) => {
	const schema = Joi.object({
		_id: Joi.string().required(),
	});

	return schema.validate(data);
};

export { createValidation, updateValidation, deleteValidation };