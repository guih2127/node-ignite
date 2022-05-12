import { getRepository, Repository } from "typeorm";
import { ICreateUserDto } from "../../dtos/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({
      email: email,
    });
  }

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      name: name,
      email: email,
      driver_license: driver_license,
      password: password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
