import { Document } from 'mongoose';
import IPreferenceType from './IPreferenceType';

export default interface IUserFromBot extends Document {
	_id: string;
	username: string;
	name: string;
	preferences: IPreferenceType[];
	is_deleted: boolean;
	is_vegetarian: boolean;
	created_at: number;
	updated_at: number;
	last_activity: number;
	language: 'ru';
}