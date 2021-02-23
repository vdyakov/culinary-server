import { Document } from 'mongoose';
import IPreferenceType from './IPreferenceType';

export default interface IRecipe extends Document {
	name: string;
	recipe: string;
	description: string;
	not_suitable_for_vegetarians: boolean;
	is_deleted: boolean;
	tags: IPreferenceType[] | any;
}