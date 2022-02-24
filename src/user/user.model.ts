import * as dynamoose from 'dynamoose'
import {User as UserInterface} from "./interfaces/user.interface";
import {Document} from "dynamoose/dist/Document";
import {v4} from 'uuid'

class User extends Document implements UserInterface {
  createdAt: Date;
  email: string;
  enterpriseId: string;
  id: string;
  name: string;
  phone: string;
  updatedAt: Date;
}

const UserSchema = new dynamoose.Schema({
  id: {type: String, hashKey: true, default: v4, forceDefault: true},
  enterpriseId: {type: String, required: true, index: {name: "enterpriseIdIndex", global: true}},
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now, forceDefault: true},
})

const UserModel = dynamoose.model<User>('User', UserSchema)


export default UserModel
