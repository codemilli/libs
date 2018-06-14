import {EntryService} from "./entry.service";

export const getList = async (req, res) => {
  const {username, level} = req.query
  let entries
  try {
    entries = await EntryService.getEntryList({
      username,
      level,
    }) || []
  } catch(e) {
    return res.status(500).json({
      code: e.code,
      errno: e.errno,
      message: e.message
    })
  }

  if (entries) {
    return res.json(entries)
  }
}

export const create = async (req, res) => {
  const {user_id, name, level, type, format, file} = req.body
  console.log('req body : ', req.body)
  let entries
  try {
    entries = await EntryService.createEntry({
      user_id, name, level, type, format, file
    }) || []
  } catch(e) {
    return res.status(500).json({
      code: e.code,
      errno: e.errno,
      message: e.message
    })
  }

  if (entries) {
    return res.json(entries)
  }
}
