import {User, UserAccountType} from "../../model/user.model";
import {getRepository} from "typeorm";
import {Repository} from "typeorm/repository/Repository";

export interface CreateUserDTO {
  email: string
  username: string
  password: string
}

export const UserService = new (class {
  userRepository: Repository<User>

  constructor() {
    this.userRepository = getRepository(User)
  }

  async createUser(user: CreateUserDTO) {
    const newUser = new User()

    newUser.account_type = UserAccountType.LOCAL
    newUser.email = user.email
    newUser.username = user.username
    newUser.salt = await User.getSalt()
    newUser.password = await User.hashing(user.password, newUser.salt)

    return await this.userRepository.save(newUser)
  }
})
