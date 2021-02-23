import mongoose from 'mongoose';
import IUser from '../intefaces/models/IUser';

export const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password_hash: { type: String, required: true },
	is_admin: { type: Boolean, default: false },
	is_deleted: { type: Boolean, default: false },
	created_at: { type: Number, default: new Date().getTime() },
	updated_at: { type: Number, default: new Date().getTime() },
	last_activity: { type: Number, default: null },
	language: String
}, {
	timestamps:true
});

const User = mongoose.model<IUser>('user', UserSchema);

export default User;