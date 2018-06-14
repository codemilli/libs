import {UserService} from "./user.service";

export const join = async (req, res) => {
  const {email, username, passwd} = req.body
  console.log('body : ', req.body, email, username, passwd)


  const user = await UserService.createUser({
    email,
    username,
    password: passwd,
  })
  res.json(true)
}
