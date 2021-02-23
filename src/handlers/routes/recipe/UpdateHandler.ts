import Recipe from '../../../models/Recipe';
import IRecipe from '../../../intefaces/models/IRecipe';
import IRecipeRequest from '../../../intefaces/routes/IRecipeRequest';
import { updateValidation } from '../../../helpers/validators/RecipeValidator';

async function updateHandler(req: IRecipeRequest, res) {
	const { error } = updateValidation(req.body || {});

	if (error) {
		return res.status(400).json({ error: error.details[0]?.message });
	}

	const { _id = 0, name = '', recipe = '', description = '', not_suitable_for_vegetarians = false, tags = '' } = req.body;

	const recipeModel: IRecipe = await Recipe.findById(_id);

	if (!recipeModel) {
		return res.status(404).json({ error: 'Recipe not found' });
	}

	recipeModel.name = name;
	recipeModel.recipe = recipe;
	recipeModel.description = description;
	recipeModel.not_suitable_for_vegetarians = not_suitable_for_vegetarians;
	recipeModel.tags = tags.split(',');

	try {
		await recipeModel.save();

		res.status(200).json({
			error: null,
			data: recipeModel,
		});
	} catch (error) {
		res.status(400).json({ error });
	}
}

export { updateHandler };