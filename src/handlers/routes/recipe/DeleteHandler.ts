import Recipe from '../../../models/Recipe';
import IRecipe from '../../../intefaces/models/IRecipe';
import IRecipeRequest from '../../../intefaces/routes/IRecipeRequest';
import { deleteValidation } from '../../../helpers/validators/RecipeValidator';

async function deleteHandler(req: IRecipeRequest, res) {
	const { error } = deleteValidation(req.body || {});

	if (error) {
		return res.status(400).json({ error: error.details[0]?.message });
	}

	const { _id = 0 } = req.body;

	const recipe: IRecipe = await Recipe.findById(_id);

	if (!recipe) {
		return res.status(404).json({ error: 'Recipe not found' });
	}

	recipe.is_deleted = true;

	try {
		await recipe.save();

		res.status(200).json({
			error: null,
			data: null
		});
	} catch (error) {
		res.status(400).json({ error });
	}
}

export { deleteHandler };