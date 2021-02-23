import PreferenceType from '../../../models/PreferenceType';
import IPreferenceType from '../../../intefaces/models/IPreferenceType';
import IPreferenceTypeRequest from '../../../intefaces/routes/IPreferenceTypeRequest';

async function getListHandler(req: IPreferenceTypeRequest, res) {
	const models: IPreferenceType[] = await PreferenceType.find({ is_deleted: false }).exec();

	res.status(200).json({
		error: null,
		data: models
	});
}

export { getListHandler };