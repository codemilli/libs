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

export const login = async (req, res) => {
  const {username, passwd} = req.body
  let user
  try {
    user = await UserService.getUserLogin({
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
  } else {
    return res.status(404).json({
      code: 404,
      errno: 404,
      message: 'no user'
    })
  }
}
