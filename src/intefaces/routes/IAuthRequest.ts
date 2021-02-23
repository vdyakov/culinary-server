import { Request } from 'Express';

export interface AuthBodyParams {
	username?: string,
	email?: string,
	password?: string,
}

export default interface IAuthRequest extends Request {
	body: AuthBodyParams,
}