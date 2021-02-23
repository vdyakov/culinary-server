import mongoose from 'mongoose';
import IUserFromBot from '../intefaces/models/IUserFromBot';

export const UserFromBotSchema = new mongoose.Schema(
	{
		_id: { type: String, required: true, unique: true },
		username: { type: String, required: true },
		name: { type: String, required: true },
		preferences: [
			{
				type: String,
				ref: 'preference_type'
			}
		],
		is_vegetarian: { type: Boolean, default: false },
		is_deleted: { type: Boolean, default: false },
		created_at: { type: Number, default: new Date().getTime() },
		updated_at: { type: Number, default: new Date().getTime() },
		last_activity: { type: Number, default: null },
		language: String,
	},
	{ _id: false, timestamps: true }
);

const UserFromBot = mongoose.model<IUserFromBot>('user_from_bot', UserFromBotSchema);

export default UserFromBot;