import IPreferenceType from '../../../intefaces/models/IPreferenceType';
import PreferenceType from '../../../models/PreferenceType';
import { updateValidation } from '../../../helpers/validators/PreferenceTypeValidator';
import IPreferenceTypeRequest from '../../../intefaces/routes/IPreferenceTypeRequest';

async function updateHandler(req: IPreferenceTypeRequest, res) {
	const { error } = updateValidation(req.body || {});

	if (error) {
		return res.status(400).json({ error: error.details[0]?.message });
	}

	const { _id = 0, name = '', not_suitable_for_vegetarians = false } = req.body;

	const preferenceType: IPreferenceType = await PreferenceType.findById(_id);

	if (!preferenceType) {
		return res.status(404).json({ error: 'PreferenceType not found' });
	}

	preferenceType.name = name;
	preferenceType.not_suitable_for_vegetarians = not_suitable_for_vegetarians;

	try {
		await preferenceType.save();

		res.status(200).json({
			error: null,
			data: preferenceType,
		});
	} catch (error) {
		res.status(400).json({ error });
	}
}

export { updateHandler };