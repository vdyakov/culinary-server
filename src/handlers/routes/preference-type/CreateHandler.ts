import IPreferenceType from '../../../intefaces/models/IPreferenceType';
import PreferenceType from '../../../models/PreferenceType';
import { createValidation } from '../../../helpers/validators/PreferenceTypeValidator';
import IPreferenceTypeRequest from '../../../intefaces/routes/IPreferenceTypeRequest';

async function createHandler(req: IPreferenceTypeRequest, res) {
	const { error } = createValidation(req.body || {});

	if (error) {
		return res.status(400).json({ error: error.details[0]?.message });
	}

	const { name = '', not_suitable_for_vegetarians = false } = req.body;

	const preferenceType: IPreferenceType = new PreferenceType({
		name,
		not_suitable_for_vegetarians,
	});

	try {
		await preferenceType.save();

		res.status(201).json({
			error: null,
			data: preferenceType,
		});
	} catch (error) {
		res.status(400).json({ error });
	}
}

export { createHandler };