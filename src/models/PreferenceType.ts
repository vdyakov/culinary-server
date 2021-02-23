import mongoose from 'mongoose';
import IPreferenceType from '../intefaces/models/IPreferenceType';

export const PreferenceTypeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	not_suitable_for_vegetarians: { type: Boolean, default: false },
	is_deleted: { type: Boolean, default: false },
}, {
	timestamps:true
});

const PreferenceType = mongoose.model<IPreferenceType>('preference_type', PreferenceTypeSchema);

export default PreferenceType;