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
