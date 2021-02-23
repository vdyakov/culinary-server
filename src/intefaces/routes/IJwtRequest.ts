import { Request } from 'Express';
import IUser from '../models/IUser';

export default interface IJwtRequest extends Request {
	user: IUser,
}