import Recipe from '../../../models/Recipe';
import IRecipe from '../../../intefaces/models/IRecipe';
import IRecipeRequest from '../../../intefaces/routes/IRecipeRequest';

async function getListHandler(req: IRecipeRequest, res) {
	const models: IRecipe[] = await Recipe.find({ is_deleted: false }).populate('tags').exec();

	res.status(200).json({
		error: null,
		data: models
	});
}

export { getListHandler };