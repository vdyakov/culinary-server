import IPreferenceType from '../../../intefaces/models/IPreferenceType';
import PreferenceType from '../../../models/PreferenceType';
import { deleteValidation } from '../../../helpers/validators/PreferenceTypeValidator';
import IPreferenceTypeRequest from '../../../intefaces/routes/IPreferenceTypeRequest';

async function deleteHandler(req: IPreferenceTypeRequest, res) {
	const { error } = deleteValidation(req.body || {});

	if (error) {
		return res.status(400).json({ error: error.details[0]?.message });
	}

	const { _id = 0 } = req.body;

	const preferenceType: IPreferenceType = await PreferenceType.findById(_id);

	if (!preferenceType) {
		return res.status(404).json({ error: 'PreferenceType not found' });
	}

	preferenceType.is_deleted = true;

	try {
		await preferenceType.save();

		res.status(200).json({
			error: null,
			data: null
		});
	} catch (error) {
		res.status(400).json({ error });
	}
}

export { deleteHandler };