export const join = (req, res) => {
  const {email, username, passwd} = req.body
  console.log('body : ', email, username, passwd)
  res.json(true)
}
