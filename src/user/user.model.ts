import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';


export interface UserModelType extends Base, TimeStamps {};

export class UserModel implements UserModelType {
	_id: Types.ObjectId;
	id: string;
	createdAt?: Date;
	updatedAt?: Date;

	@prop({ unique: true })
	email: string;

	@prop()
	password: string;

	@prop({ default: false })
	isAdmin?: boolean;
}
