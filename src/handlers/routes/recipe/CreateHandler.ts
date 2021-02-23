import Recipe from '../../../models/Recipe';
import IRecipe from '../../../intefaces/models/IRecipe';
import IRecipeRequest from '../../../intefaces/routes/IRecipeRequest';
import { createValidation } from '../../../helpers/validators/RecipeValidator';

async function createHandler(req: IRecipeRequest, res) {
	const { error } = createValidation(req.body || {});

	if (error) {
		return res.status(400).json({ error: error.details[0]?.message });
	}

	const { name = '', recipe = '', description = '', not_suitable_for_vegetarians = false, tags = '' } = req.body;

	const recipeModel: IRecipe = new Recipe({
		name,
		recipe,
		description,
		not_suitable_for_vegetarians,
		tags: tags.split(',')
	});

	try {
		await recipeModel.save();

		res.status(201).json({
			error: null,
			data: recipeModel,
		});
	} catch (error) {
		res.status(400).json({ error });
	}
}

export { createHandler };