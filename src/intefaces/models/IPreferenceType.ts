import { Document } from 'mongoose';

export default interface IPreferenceType extends Document {
	name: string;
	not_suitable_for_vegetarians: boolean;
	is_deleted: boolean;
}