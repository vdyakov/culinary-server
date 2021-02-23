import IJwtRequest from './IJwtRequest';

export interface RecipeBodyParams {
	_id?: string,
	name?: string,
	recipe?: string,
	description?: string,
	not_suitable_for_vegetarians?: boolean,
	tags?: string,
}

export default interface IRecipeRequest extends IJwtRequest {
	body: RecipeBodyParams,
}