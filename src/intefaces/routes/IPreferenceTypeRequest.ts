import IJwtRequest from './IJwtRequest';

export interface PreferenceTypeBodyParams {
	_id?: string,
	name?: string,
	not_suitable_for_vegetarians?: boolean,
}

export default interface IPreferenceTypeRequest extends IJwtRequest {
	body: PreferenceTypeBodyParams,
}