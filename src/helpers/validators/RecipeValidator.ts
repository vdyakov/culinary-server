import Joi from 'Joi';
import { RecipeBodyParams } from '../../intefaces/routes/IRecipeRequest';

const createValidation = (data: RecipeBodyParams) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		recipe: Joi.string().required(),
		description: Joi.string().default(''),
		not_suitable_for_vegetarians: Joi.boolean().default(false),
		tags: Joi.string(),
	});

	return schema.validate(data);
};

const updateValidation = (data: RecipeBodyParams) => {
	const schema = Joi.object({
		_id: Joi.string().required(),
		name: Joi.string().required(),
		recipe: Joi.string().required(),
		description: Joi.string().default(''),
		not_suitable_for_vegetarians: Joi.boolean().default(false),
		tags: Joi.string(),
	});

	return schema.validate(data);
};

const deleteValidation = (data: RecipeBodyParams) => {
	const schema = Joi.object({
		_id: Joi.string().required(),
	});

	return schema.validate(data);
};

export { createValidation, updateValidation, deleteValidation };