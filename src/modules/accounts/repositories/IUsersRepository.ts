import { ICreateUserDto } from "../dtos/ICreateUserDto";

interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
}

export { IUsersRepository };
