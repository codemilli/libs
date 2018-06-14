import {User, UserAccountType} from "../../model/user.model";

export interface CreateUserDTO {
  email: string
  username: string
  password: string
}

export const UserService = new (class {
  constructor() {}

  async createUser(user: CreateUserDTO) {
    const newUser = new User()

    newUser.account_type = UserAccountType.LOCAL
    newUser.email = user.email
    newUser.username = user.username
    newUser.salt = await User.getSalt()
    newUser.password = await User.hashing(user.password, newUser.salt)

    newUser.save
  }
})
