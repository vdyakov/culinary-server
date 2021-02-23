import mongoose from 'mongoose';
import IRecipe from '../intefaces/models/IRecipe';

export const RecipeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	not_suitable_for_vegetarians: { type: Boolean, default: false },
	is_deleted: { type: Boolean, default: false },
	tags: [
		{
			type: String,
			ref: 'preference_type'
		}
	],
	recipe: { type: String, required: true },
	description: { type: String },
}, {
	timestamps:true
});

const Recipe = mongoose.model<IRecipe>('recipe', RecipeSchema);

export default Recipe;