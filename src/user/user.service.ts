import {User} from "./interfaces/user.interface";
import {Injectable} from "@nestjs/common";
import UserModel from "./user.model";
import {ScanResponse} from "dynamoose/dist/DocumentRetriever";

@Injectable()
export class UserService {

  private readonly users: User[] = []

  async create(user: User): Promise<User> {
    return await UserModel.create(user)
  }

  async findAll(): Promise<ScanResponse<User>> {
    const users = await UserModel.scan().exec()
    return users
  }

}
