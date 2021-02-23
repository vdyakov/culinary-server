import { Document } from 'mongoose';

export default interface IUser extends Document {
	username: string;
	email: string;
	password_hash: string;
	is_admin: boolean;
	is_deleted: boolean;
	created_at: number;
	updated_at: number;
	last_activity: number;
	language: 'ru';
}