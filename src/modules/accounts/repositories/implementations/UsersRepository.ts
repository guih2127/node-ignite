import { getRepository, Repository } from "typeorm";
import { ICreateUserDto } from "../../dtos/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      name: name,
      username: username,
      email: email,
      driver_license: driver_license,
      password: password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
