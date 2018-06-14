import {UserService} from "./user.service";

export const join = async (req, res) => {
  const {email, username, passwd} = req.body
  let user
  try {
    user = await UserService.createUser({
      email,
      username,
      password: passwd,
    })
  } catch(e) {
    return res.status(500).json({
      code: e.code,
      errno: e.errno,
      message: e.message
    })
  }

  if (user) {
    return res.json(user)
  }
}
